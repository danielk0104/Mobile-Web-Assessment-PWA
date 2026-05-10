import { Link } from "react-router-dom"

function ImageButton({ image, text, to }) {
    return (
        <div className="p-5">
                <button className="relative overflow-hidden text-white w-full h-25 rounded-2xl group">
                    <Link to={to}>
                        <span className="absolute inset-0 bg-cover bg-center group-hover:scale-120 transition-transform duration-200" style={{ backgroundImage: `url(${image})` }}></span>
                        <span className="absolute inset-0 bg-black/50"></span>
                        <span className="relative z-10 font-display font-bold text-2xl">{text}</span>
                    </Link>
                </button>
            </div>
    )
}

export default ImageButton