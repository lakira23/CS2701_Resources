
import sharingFood from '../assets/SharingFood.jpg';
export default function Header() {
    return (
        <header
            style={{
                textAlign: 'center',
                margin: "auto",
                width: "100%",
            }}
        >
            <img
                src={sharingFood}
                alt='Header image'
                style={{
                    height: "200px",
                    width: "100%",
                    objectFit: "contain",
                objectPosition: "center",
            }}
/>
        </header>
    );
}