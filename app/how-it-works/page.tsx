import Header from '../components/Header';

export default function HowItWorks() {
    return (
        <div className="min-h-screen bg-[#F5EFE7]">
            <Header />
            <div className="pt-24">
                <section className="section-padding bg-[#F5EFE7] overflow-hidden py-16">
                    <div className="max-w-5xl mx-auto px-4 md:px-6">
                        <h2 className="text-5xl md:text-6xl font-serif font-light mb-16 text-center text-[#2C2418] leading-tight">
                            How It Works
                        </h2>

                        <div className="space-y-12 max-w-3xl mx-auto">
                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F4B942] text-[#2C2418] flex items-center justify-center text-lg font-bold shadow-md">
                                    01
                                </div>
                                <div className="flex-1 pt-2">
                                    <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-3 text-[#2C2418]">
                                        Join the Waitlist
                                    </h3>
                                    <p className="text-lg text-[#2C2418]/70 leading-relaxed">
                                        Sign up to be notified when we launch in your area. Early subscribers get priority access and exclusive launch pricing.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F4B942] text-[#2C2418] flex items-center justify-center text-lg font-bold shadow-md">
                                    02
                                </div>
                                <div className="flex-1 pt-2">
                                    <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-3 text-[#2C2418]">
                                        Choose Your Meals
                                    </h3>
                                    <p className="text-lg text-[#2C2418]/70 leading-relaxed">
                                        Select from our thoughtfully curated meal packs designed specifically for postpartum recovery and nourishment.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F4B942] text-[#2C2418] flex items-center justify-center text-lg font-bold shadow-md">
                                    03
                                </div>
                                <div className="flex-1 pt-2">
                                    <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-3 text-[#2C2418]">
                                        Receive at Home
                                    </h3>
                                    <p className="text-lg text-[#2C2418]/70 leading-relaxed">
                                        Fresh, chef-prepared meals delivered to your door on a schedule that works for you. No cooking, no stress.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F4B942] text-[#2C2418] flex items-center justify-center text-lg font-bold shadow-md">
                                    04
                                </div>
                                <div className="flex-1 pt-2">
                                    <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-3 text-[#2C2418]">
                                        Rest & Recover
                                    </h3>
                                    <p className="text-lg text-[#2C2418]/70 leading-relaxed">
                                        Heat, eat, and focus on healing and your baby. We take care of the nourishment, you take care of yourself.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="text-center mt-16">
                            <a
                                href="/#join"
                                className="inline-flex items-center gap-2 bg-[#F4B942] text-[#2C2418] px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#E5AA32] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
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
