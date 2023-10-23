export interface IButton {
  text: string;
  onClick(): void; 
  withTouchableArea?: boolean;
}
