const mutations = {
    login(state, v) {
        if (v) {
            state.userInfo = v;
        } else if (v == "") {
            sessionStorage.setItem("userInfo", "")
            state.userInfo = ""
        }

    }
}
export default mutations