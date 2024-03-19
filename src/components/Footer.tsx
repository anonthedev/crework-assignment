import facebook from "../resources/imgs/facebook.png"
import linkedin from "../resources/imgs/linkedin.png"
import behance from "../resources/imgs/behance.png"
import dribble from "../resources/imgs/dribbble.png"
import line from "../resources/imgs/line.svg"

export default function Footer() {
    return (
        <footer className="w-screen flex flex-col bg-[#181616] items-center gap-10 py-10 px-20 lg:px-5">
            <section className="w-full flex flex-row justify-between items-center lg:flex-col lg:gap-10">
                <span className="font-[Montserrat] font-bold text-4xl w-1/3 lg:w-auto">Crework<span className="text-yellow">.</span></span>

                <div className="flex flex-row gap-20 text-gray lg:text-center">
                    <div className="flex flex-col gap-2">
                        <a href="#">Newsletter</a>
                        <a href="#">Builders Cohort</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <a href="#">30 Days of PM</a>
                        <a href="#">Transition to PM role</a>
                    </div>
                </div>

                <div className="flex flex-row gap-5 w-1/3 justify-end lg:w-auto">
                    <img className="h-full aspect-square" src={facebook} alt="facebook" />
                    <img className="aspect-square" src={linkedin} alt="linkedin" />
                    <img className="aspect-square" src={behance} alt="behance" />
                    <img className="aspect-square" src={dribble} alt="dribble" />
                </div>
            </section>

            <img src={line} alt="" />

            <section className="">
                <span>Copyright &copy; 2024 Crework.</span>
            </section>
        </footer>
    )
}
