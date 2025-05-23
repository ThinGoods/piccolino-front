export interface IHeaderProps {
  isHeader: boolean;
  showBackdrop?(): void;
}
export interface ITopContentProps {
  withMarginTop: boolean;
}

export interface IStyledIsHeaderProps {
  isHeader: IHeaderProps['isHeader'];
}

// export interface IBlabla extends Pick<IHeaderProps, 'isHeader'> {
// }

// export interface IBlabla2 {
//   isHeader: IHeaderProps['isHeader']
// }
