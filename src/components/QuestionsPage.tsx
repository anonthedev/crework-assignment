import Questions from "./Questions.tsx"

export default function QuestionsPage() {
    return (
        <section className="font-[Montserrat] w-3/4 text-left flex flex-col gap-4 h-full md:w-full md:px-5">
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl md:text-[28px] font-bold font-[Poppins] bg-gradient-to-b from-[#FFFFFF] to-[#FAAF3E] w-fit text-transparent bg-clip-text pb-[2px]">Product Management Interview Questions</h1>
                <p>Browse 1000+ questions from top tech companies</p>
            </div>
            <Questions />
        </section>
    )
}
