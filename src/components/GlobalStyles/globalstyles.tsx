import './GlobalStyles.scss';
type Props = {
    children: JSX.Element;
};
function GlobalStyles({ children }: Props): JSX.Element {
    return children;
}
export default GlobalStyles;
