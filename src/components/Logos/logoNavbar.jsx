import logoImage from '../../assets/logos/logo_blanco.png'; // Cambia la ruta a tu logo

const Logo = () => {
    return (
        <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <img 
                src={logoImage} 
                alt="BrasPer Transferencias" 
                style={{ height: '45px' }}
            />
        </div>
    );
};

export default Logo;
