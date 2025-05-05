import { useEffect, useRef } from 'react';
import { useAuth } from './useAuth';
import { useToast } from './use-toast';

/**
 * Hook to automatically log out users after a period of inactivity
 * @param timeoutInMinutes - Time in minutes before automatic logout (default: 10)
 * @param warningInMinutes - Time in minutes before showing a warning (default: 1)
 */
export const useInactivityLogout = (
  timeoutInMinutes: number = 10,
  warningInMinutes: number = 1
): void => {
  const { logout } = useAuth();
  const { toast } = useToast();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const warningTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const resetTimer = () => {
    // Clear existing timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    
    if (warningTimeoutRef.current) {
      clearTimeout(warningTimeoutRef.current);
      warningTimeoutRef.current = null;
    }
    
    // Set warning timeout
    const warningTime = timeoutInMinutes - warningInMinutes;
    if (warningTime > 0) {
      warningTimeoutRef.current = setTimeout(() => {
        toast({
          title: "Auto-logout Warning",
          description: `You will be logged out in ${warningInMinutes} minute${warningInMinutes > 1 ? 's' : ''} due to inactivity.`,
          variant: "destructive",
          duration: 10000, // 10 seconds
        });
      }, warningTime * 60 * 1000);
    }
    
    // Set logout timeout
    timeoutRef.current = setTimeout(() => {
      toast({
        title: "Auto-logout",
        description: "You have been logged out due to inactivity.",
        variant: "default",
      });
      
      // Perform logout
      logout();
    }, timeoutInMinutes * 60 * 1000);
  };
  
  useEffect(() => {
    // Initialize the timer when the component mounts
    resetTimer();
    
    // Events to track user activity
    const activityEvents = [
      'mousedown',
      'mousemove',
      'keypress',
      'scroll',
      'touchstart',
      'click',
    ];
    
    // Event handler for user activity
    const handleUserActivity = () => {
      resetTimer();
    };
    
    // Add event listeners
    activityEvents.forEach(event => {
      document.addEventListener(event, handleUserActivity);
    });
    
    // Clean up event listeners and timeouts on unmount
    return () => {
      activityEvents.forEach(event => {
        document.removeEventListener(event, handleUserActivity);
      });
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      if (warningTimeoutRef.current) {
        clearTimeout(warningTimeoutRef.current);
      }
    };
  }, [timeoutInMinutes, warningInMinutes, logout]);
};
