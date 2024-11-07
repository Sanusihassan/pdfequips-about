"use client";
import Navbar from 'pdfequips-navbar';
import { Footer } from "pdfequips-footer/src/Footer";
import { type contentType } from './content/content';

const AboutPage = ({ content, lang }: { content: contentType; lang: string }) => {
    return (
        <>
            <Navbar path="about" lang={lang} />
            <main className="container my-8">
                <section>
                    <div className="card-body">
                        <h1 className="card-title">{content.title}</h1>
                        <p className="lead">{content.intro}</p>

                        <h3>{content.founderTitle}</h3>
                        <p className="lead">{content.founderDescription}</p>

                        <h3>{content.historyTitle}</h3>
                        <p className="lead">{content.historyDescription}</p>

                        <h3>{content.missionTitle}</h3>
                        <p className="lead">{content.missionDescription}</p>
                    </div>
                </section>
            </main>
            <Footer lang={lang} title={content.footerTitle} />
        </>
    );
};

export default AboutPage;
