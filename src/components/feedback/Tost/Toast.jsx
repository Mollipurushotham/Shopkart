import styles from "./Toast.module.css";

function Toast({ message, enClose }) {
    if (!message) {
        return null;

    }

    return (
        <div className={`toasr show ${styles.toast}`}>
            
             </div>
    )
}