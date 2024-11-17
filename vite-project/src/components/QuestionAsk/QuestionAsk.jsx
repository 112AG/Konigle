import React, { useState } from 'react'
import './QuestionAsk.css'

function QuestionAsk() {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const questions = [
        {
            id: 1,
            question: "Can I customize the design of my AI website?",
            answer: "Yes, just like you can ask web developers to make changes and update a website, you can customise the design of your AI website by chatting with the AI website builder."
        },
        {
            id: 2,
            question: "Can I use my own domain to create an AI website?",
            answer: "Yes, you can. Tim AI website builders allow you to use your own domain name, so you can keep your brand consistent and professional."
        },
        {
            id: 3,
            question: "Can this AI builder website help SEO rank better?" ,
            answer: "Yes, it can. Using Tim AI website builder, you'll get a website optimized for search engines, which can improve your rankings and drive more traffic to your site."
        },
        {
            id: 4,
            question: "How does the AI Website Builder work?",
            answer: "Simply chat with Konigle as you talk to a web developer, Tell what kind of website and design you want. Share goals  you want to achieve from your website, that's it. It will build and host the an SEO-optimised website for you within minutes. "
        },
        {
            id: 5,
            question: "How long does it take to create my own site?",
            answer: "It usually takes 15-20 minutes to create your own website. After which you can spend time chatting with Konigle and making further changes to your website."
        },
        {
            id: 6,
            question: "How much does it cost to build my AI website?",
            answer: "The cost varies depending on the AI website you choose, but it's often more affordable than hiring a web developer. Think of it as a budget-friendly and error-free way to get a professional website."
        },
        {
            id: 7,
            question: "Is hosting included with the AI website builder?",
            answer: "Yes, konigle AI website builder offers a fast hosting service, so you don't have to worry about finding a separate host for your website."
        },
        {
            id: 8,
            question: "Is the site mobile-friendly?",
            answer: "Yes, website created with the Konigle AI website builder are mobile friendly."
        },
        {
            id: 9,
            question: "Is the site SEO-optimized?",
            answer: "Yes, websites built by Konigle are SEO optimized."
        },
        {
            id: 10,
            question: "What are the benefits of an AI website builder?",
            answer: " With AI website builders like Tim, you'll get a website that's fast, mobile-friendly, SEO-optimized, and easy to create. Plus, you'll save time and money compared to hiring a web developer!"
        },
        {
            id: 11,
            question: "What is an AI website builder?",
            answer: "An AI website builder like Konigle is an AI system that you can chat with and create a website. Its like having a highly skilled website developer that also understands digital marketing."
        },
        {
            id: 12,
            question: "Which is the best AI website builder for fast websites?",
            answer: "There are many website builders in the market but Tim stands out as unique. Tim is a great option for building fast, AI-powered CMS websites with SEO-optimised capabilities."
        },
        {
            id: 13,
            question: "Why build your website with Tim?",
            answer: "Tim offers a user-friendly AI website builder that's fast, affordable, and easy to use. Plus, you'll get access to a range of SEO tools, different plugins, and design options to make your website stand out."
        },
        {
            id: 14,
            question: "Why should I have a website?",
            answer: "Having a website is like opening the doors to your very own digital storefront. It's a platform where you can showcase your brand, share your story, and connect with your audience 24/7. It helps you establish credibility, attract customers, and grow your business too."
        }

    ];

    const toggleQuestion = (questionId) => {
        setActiveQuestion(activeQuestion === questionId ? null : questionId);
    };

    return (
        <>
        <div className='questionask-div'>
            <h1 className='questionask-heading'>Frequently asked questions</h1>

            {questions.map((q) => (
                <div key={q.id}>
                    <div className='question-doubt' onClick={() => toggleQuestion(q.id)}>
                        <div className="question-head">
                            <p className="question-para">{q.question}</p>
                            <div className="question-icon">
                                <i className={`question-icon-i ${activeQuestion === q.id ? "ri-close-large-line" : "ri-add-large-line"}`}></i>
                            </div>
                        </div>
                    </div>
                    <div className={`question-ans-para fon-helv ${activeQuestion === q.id ? 'show' : ''}`}>
                        {q.answer}
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}

export default QuestionAsk