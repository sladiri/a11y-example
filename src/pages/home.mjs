export const title = "Accessibility Workshop Home";
export const description =
    "Shows examples for accessible widgets and user experience patterns. Author: Slađan Ristić, Length: 1 pages";

export const Home = {
    skips: [["Main", "Main Content"]],
    title,
    description,
    page: props => {
        return props.cn(home);
    },
};

export const home = props => {
    const { render } = props;
    return render`
        <h1 id="Main" tabindex="-1">Accesibility Examples</h1>
        `;
};
