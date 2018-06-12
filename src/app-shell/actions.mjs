export const _Actions = ({ propose }) => {
    return Object.assign(Object.create(null), {
        // async fetchPosts({ cancel = false } = {}) {
        //     const proposal = cancel
        //         ? {}
        //         : fetch("/api/posts")
        //               .then(resp => resp.json())
        //               .then(posts => ({ posts }));
        //     await propose({ proposal }, "fetchPosts");
        // },
    });
};

export const Actions = ({ propose }) => {
    const actions = _Actions({ propose });
    return actions;
};
