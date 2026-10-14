import React from 'react';

function Footer({ phone = "23408129255439", instagramHandle = "niolaali" }) {
    const whatsappUrl = `https://wa.me/${phone}`;
    const instagramUrl = `https://instagram.com/${instagramHandle}`;

    return (
        <footer className="bg-[#2D2727] text-white py-12 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">


                <div className="space-y-2">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-400 to-red-500 flex items-center justify-center text-white font-bold text-xs">
                            N
                        </div>
                        <span className="font-extrabold text-2xl tracking-tight text-white">
                            NIOLA
                        </span>
                    </div>
                    <p className="text-gray-400 text-sm max-w-sm">
                        Handcrafted custom crotchets — "Welcome to my delulu home 🙂"
                    </p>
                </div>


                <div className="flex items-center gap-4">
                    <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs sm:text-sm font semibold transition-colors items-center justify-center gap-1.5 whitespace-nowrap"
                    >
                        <span>Instagram</span>
                        <span className="text-xs">(@{instagramHandle})</span>
                    </a>

                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-2.5 bg-[#FF7B54] hover:bg-[#F05A2B] text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors text-center whitespace-nowrap"
                    >
                        WhatsApp
                    </a>
                </div>
            </div>

            <div className="max-w-6xl mx-auto border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} NIOLA (@niolaali). All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;