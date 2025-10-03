import { auth } from "/js/firebase.config.js";
import { signOut, onAuthStateChanged }
    from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

/**
 * Valida la sesión de usuario y ejecuta callback si está logueado.
 * Si no hay sesión, redirige al login.
 */
export function validarSesion({ onUserLogged }) {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const data = {
                uid: user.uid,
                nombre: user.displayName || "Usuario",
                email: user.email,
            };
            if (onUserLogged) onUserLogged(data);
        } else {
            window.location.href = "/login.html";
        }
    });
}

/**
 * Cierra la sesión del usuario y redirige al login.
 */
export async function cerrarSesion() {
    await signOut(auth);
    window.location.href = "/login.html";
}
