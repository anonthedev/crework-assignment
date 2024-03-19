import { useState, useEffect } from "react"
import { dummyTags, dummyQuestions } from "../dummyData"
import { useSearchParams } from "react-router-dom";

export default function Questions() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeTag, setActiveTag] = useState("All")
    const [activePage, setActivePage] = useState(0)

    const numberOfQuestionsInAPage = 10

    const pages = new Array(Math.ceil(dummyQuestions.length / numberOfQuestionsInAPage)).fill(null)

    useEffect(() => {
        if (searchParams.get("page")) {
            setActivePage(parseInt(searchParams.get("page")!) - 1)
        } else {
            setSearchParams(`page=${1}`)
            setActivePage(0)
        }
    }, [searchParams])

    const questionsToBeShown = dummyQuestions.slice(0 + activePage * numberOfQuestionsInAPage, (activePage + 1) * numberOfQuestionsInAPage)

    return (
        <main className="h-full flex flex-col gap-10 justify-between mb-10">
            <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-3 flex-wrap font-[Poppins]">
                    {dummyTags.map((tag: string, index: number) => (
                        <span key={index} onClick={() => {
                            setActiveTag(tag)
                        }} className={`border-[1px] border-white rounded cursor-pointer py-1 px-3 font-md
                     ${activeTag === tag ? "bg-white text-black" : "bg-transparent text-white"}`}>{tag}</span>
                    ))}
                </div>
                <div className="flex flex-col gap-4">
                    {questionsToBeShown.map((question, index) => {
                        if (activeTag !== "All") {
                            if (question.tags.includes(activeTag)) {
                                return (<div key={index} className="flex flex-col gap-1">
                                    <p className="font-normal font-[Poppins] text-lg">{question.question}</p>
                                    <div className="flex flex-row gap-2 text-gray font-[Inter] text-sm">
                                        {question.tags.map((tag: string) => (<span>{tag}</span>))}
                                    </div>
                                </div>)
                            }
                        } else {
                            return (<div key={index} className="flex flex-col gap-1">
                                <p className="font-normal font-[Poppins] text-lg">{question.question}</p>
                                <div className="flex flex-row gap-2 text-gray font-[Inter] text-sm">
                                    {question.tags.map((tag: string, index) => (
                                        <span key={index}>{tag}</span>
                                    ))}
                                </div>
                            </div>)
                        }
                    })}
                </div>
            </div>
            <div className="flex flex-row items-center gap-5 self-end lg:self-center md:text-sm">
                <button className={`bg-yellow py-2 px-5 text-black rounded-md font-semibold font-[Inter] ${activePage <= 0 ? "opacity-50" : "opacity-100"}`} disabled={activePage <= 0} onClick={() => {
                    if (parseInt(searchParams.get("page")!) > 1) {
                        setSearchParams(`page=${parseInt(searchParams.get("page")!) - 1}`)
                    }
                }}>Prev</button>

                <span className="block md:hidden">{"Showing items " +
                    `${1 + activePage * numberOfQuestionsInAPage}` + " - " +
                    `${dummyQuestions.length > (activePage + 1) * numberOfQuestionsInAPage
                        ? (activePage + 1) * numberOfQuestionsInAPage
                        : dummyQuestions.length}`
                    + " of " + dummyQuestions.length} </span>

                <div className="flex flex-row gap-2">
                    {
                        pages.length < 5
                            ? pages.map((_, index) => (
                                <span
                                    key={index}
                                    className={`px-3 py-1 border-[0.5px] rounded-md cursor-pointer ${activePage === index ? "border-yellow text-yellow" : "border-gray text-gray"}`}
                                    onClick={() => { setSearchParams(`page=${index + 1}`) }}>
                                    {index + 1}
                                </span>
                            ))
                            : [
                                ...pages.slice(0, 2).map((_, index) => (
                                    <span
                                        key={index}
                                        className={`px-3 py-1 border-[0.5px] rounded-md cursor-pointer ${activePage === index ? "border-yellow text-yellow" : "border-gray text-gray"}`}
                                        onClick={() => { setSearchParams(`page=${index + 1}`) }}>
                                        {index + 1}
                                    </span>
                                )),
                                "...",
                                ...pages.slice(-1).map((_, index) => (
                                    <span
                                        key={pages.length - 2 + index}
                                        className={`px-3 py-1 border-[0.5px] rounded-md cursor-pointer ${activePage === pages.length - 1 ? "border-yellow text-yellow" : "border-gray text-gray"}`}
                                        onClick={() => { setSearchParams(`page=${pages.length}`) }}>
                                        {pages.length}
                                    </span>
                                ))
                            ]
                    }

                </div>

                <button className={`bg-yellow py-2 px-5 text-black rounded-md font-semibold font-[Inter] ${(activePage + 1) * numberOfQuestionsInAPage >= dummyQuestions.length ? "opacity-50" : "opacity-100"}`} disabled={(activePage + 1) * numberOfQuestionsInAPage >= dummyQuestions.length} onClick={() => {
                    if (searchParams.get("page")) {
                        setSearchParams(`page=${parseInt(searchParams.get("page")!) + 1}`)
                    } else {
                        setSearchParams(`page=${2}`)
                    }
                }}>Next</button>
            </div>
        </main>

    )
}
