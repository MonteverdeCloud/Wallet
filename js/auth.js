import { auth } from "/js/firebase.config.js";
import { signOut, onAuthStateChanged }
    from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

/** Muestra el overlay de carga */
function mostrarLoading() {
    const overlay = document.getElementById("loadingOverlay");
    if (overlay) overlay.classList.remove('hidden');
}

/** Oculta el overlay de carga */
function ocultarLoading() {
    const overlay = document.getElementById("loadingOverlay");
    const appContainer = document.getElementById("appContainer");
    if (overlay && appContainer) {
        overlay.classList.add('hidden');
        appContainer.classList.add('loaded');
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300);
    }
}

/**
 * Valida la sesión de usuario y ejecuta callback si está logueado.
 * Si no hay sesión, redirige al login.
 * Maneja la animación de carga.
 */
export function validarSesion({ onUserLogged, onError }) {
    mostrarLoading();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const data = {
                uid: user.uid,
                nombre: user.displayName || "Usuario",
                email: user.email,
            };
            if (onUserLogged) onUserLogged(data);
            ocultarLoading();
        } else {
            ocultarLoading();
            window.location.href = "/login.html";
            if (onError) onError();
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
