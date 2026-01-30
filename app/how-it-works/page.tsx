import Header from '../components/Header';

export default function HowItWorks() {
    return (
        <div className="min-h-screen bg-[#FFFBEB]">
            <Header />
            <div className="pt-24">
                <section id="how-it-works" className="section-padding bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] overflow-hidden py-16">
                    <div className="max-w-5xl mx-auto px-4 md:px-6">
                        <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-16 text-center text-[#dd7409] animate-fadeInUp opacity-0">
                            How It Works
                        </h2>

                        <div className="space-y-8">
                            <div className="flex flex-col md:flex-row gap-8 items-start bg-gradient-to-r from-white to-[#FEF3C7]/40 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 animate-fadeInLeft opacity-0 animate-delay-200 border-2 border-[#FCD34D]/30">
                                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#dd7409] to-[#fcbe11] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                                    1
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-serif font-semibold mb-2 text-[#dd7409]">
                                        Join the Waitlist
                                    </h3>
                                    <p className="text-lg text-[#2C2418]/70 leading-relaxed">
                                        Tell us your due date and location.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-8 items-start bg-gradient-to-r from-white to-[#FEF3C7]/40 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 animate-fadeInRight opacity-0 animate-delay-400 border-2 border-[#FCD34D]/30">
                                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#dd7409] to-[#fcbe11] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                                    2
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-serif font-semibold mb-2 text-[#dd7409]">
                                        We Prepare & Deliver
                                    </h3>
                                    <p className="text-lg text-[#2C2418]/70 leading-relaxed">
                                        Fresh meals are prepared weekly and delivered to your door.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-8 items-start bg-gradient-to-r from-white to-[#FEF3C7]/40 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 animate-fadeInLeft opacity-0 animate-delay-600 border-2 border-[#FCD34D]/30">
                                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#dd7409] to-[#fcbe11] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                                    3
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-serif font-semibold mb-2 text-[#dd7409]">
                                        You Rest & Recover
                                    </h3>
                                    <p className="text-lg text-[#2C2418]/70 leading-relaxed">
                                        Heat, eat, and focus on healing and your baby.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA after "How It Works" */}
                        <div className="text-center mt-16 animate-fadeInUp opacity-0 animate-delay-800">
                            <a
                                href="/#join" // Updated to link back to home page anchor
                                className="inline-flex items-center gap-2 bg-[#dd7409] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#c66508] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                <span>Join the Waitlist</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
