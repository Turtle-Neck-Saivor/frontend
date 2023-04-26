import { useRef } from 'react';

const useNotification = () => {
  const notificationRef = useRef<Notification>();

  if (Notification.permission !== 'granted') {
    try {
      Notification.requestPermission().then((permission) => {
        if (permission !== 'granted') return;
      });
    } catch (error) {
      if (error instanceof TypeError) {
        Notification.requestPermission((permission) => {
          if (permission !== 'granted') return;
        });
      } else {
        console.error(error);
      }
    }
  }

  const setNotificationClickEvent = () => {
    if (notificationRef.current) {
      notificationRef.current.onclick = (event: any) => {
        event.preventDefault();
        window.focus();
        notificationRef.current?.close();
      };
    }
    notificationRef.current = undefined;
  };

  const fireNotificationWithTimeout = (title: string, options = {}) => {
    if (Notification.permission !== 'granted') return;

    const newOption = {
      badge:
        'https://user-images.githubusercontent.com/77673029/234650373-39707ab7-0fab-4a87-ad1f-48b193abcd32.png',
      icon: 'https://user-images.githubusercontent.com/77673029/234650373-39707ab7-0fab-4a87-ad1f-48b193abcd32.png',
      ...options,
    };

    if (!notificationRef.current) {
      notificationRef.current = new Notification(title, newOption);
      setNotificationClickEvent();
    }
  };

  return { fireNotificationWithTimeout };
};

export default useNotification;
