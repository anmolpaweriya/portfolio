
export default function Footer() {
    return (
        <footer
            className="absolute left-0 w-full bg-black-600 flex justify-center mt-20"
        >
            <div
                className=" max-w-7xl w-full flex justify-between items-center c-space py-3 max-sm:flex-col gap-5 "
            >

                <p className="text-white-600">Terms & Conditions | Privacy Policy</p>

                <div className="flex gap-3">

                    <div className="social-icon">
                        <img src="/assets/github.svg" alt=""
                            className="w-1/2 h-1/2"
                        />

                    </div>
                    <div className="social-icon">
                        <img src="/assets/leetcode.png" alt=""
                            className="w-1/2 h-1/2"
                        />

                    </div>
                    <div className="social-icon">
                        <img src="/assets/linkedin.png" alt=""
                            className="w-1/2 h-1/2"
                        />

                    </div>
                </div>

                <p className="text-white-500">© 2024 Anmol Paweriya. All rights reserved.</p>
            </div>

        </footer>
    )
}
