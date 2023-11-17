interface AlertMessageType {
   message: string;
   type: 'success' | 'error' | 'info' | 'warning';
   duration?: number;
}