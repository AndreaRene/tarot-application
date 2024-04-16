export async function login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/reading');
}

export function logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/landing')
}