import Image from 'next/image';
import Header from '../components/Header';

export default function About() {
    return (
        <div className="min-h-screen bg-[#F5EFE7]">
            <Header />
            <div className="pt-24">

                {/* The Problem Section */}
                <section className="section-padding bg-[#F5EFE7] overflow-hidden py-16">
                    <div className="max-w-7xl mx-auto px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1566004100631-35d015d6a491?q=80&w=2070&auto=format&fit=crop"
                                    alt="Mother resting with newborn baby"
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-[#F4B942]/15"></div>
                            </div>

                            <div className="px-4 md:px-0">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-6 text-[#2C2418] leading-tight">
                                    The postpartum period is physically demanding
                                </h2>

                                <div className="space-y-6 text-lg md:text-xl text-[#2C2418]/80 leading-relaxed">
                                    <p>
                                        Healing takes time. Sleep is broken. Decisions feel overwhelming. Yet proper nutrition remains essential for recovery.
                                    </p>
                                    <p className="font-semibold text-[#2C2418] text-xl md:text-2xl">
                                        Most meal services aren't designed for postpartum recovery.
                                    </p>
                                    <p className="text-3xl md:text-4xl font-serif text-[#F4B942] pt-4 font-semibold">
                                        Birth&Brodo is.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Founder Story Section */}
                <section className="section-padding bg-white overflow-hidden py-16">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="mb-20">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 text-[#2C2418]">
                                    Why we built this
                                </h2>
                                <p className="text-xl text-[#2C2418]/70 max-w-2xl mx-auto">
                                    A mission born from real experience
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                {/* Image */}
                                <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2128&auto=format&fit=crop"
                                        alt="Mother and baby - the inspiration behind Birth&Brodo"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-[#F4B942]/15"></div>
                                </div>

                                {/* Story */}
                                <div className="space-y-6 text-lg text-[#2C2418]/80 leading-relaxed">
                                    <p>
                                        <span className="text-2xl font-serif text-[#2C2418] font-semibold block mb-3">
                                            We know what the postpartum period demands.
                                        </span>
                                        The fourth trimester is a time of profound transformation — physically, emotionally, and mentally. Yet most support systems fall short when it comes to the simple, essential need for nourishing food.
                                    </p>

                                    <p>
                                        Birth&Brodo was created by people who understand postpartum recovery firsthand. We have experienced the sleepless nights, the overwhelming decisions, and the critical importance of proper nutrition during healing.
                                    </p>

                                    <p>
                                        We saw a gap between what new mothers need and what is available. Traditional meal services aren't designed for the unique demands of postpartum recovery. So we decided to build something different — something purpose-built, caring, and truly supportive.
                                    </p>

                                    <p className="font-semibold text-[#F4B942] text-xl pt-4">
                                        Birth&Brodo isn't just a business. It's our way of supporting you through one of life's most demanding journeys.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Thoughtfully Designed Badge */}
                        <div className="bg-gradient-to-br from-[#F4B942] to-[#E5AA32] rounded-3xl p-10 md:p-16 shadow-xl hover:shadow-2xl transition-all duration-500">
                            <div className="text-center">
                                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                                    <svg className="w-10 h-10 md:w-12 md:h-12 text-[#2C2418]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-serif font-semibold text-[#2C2418] mb-6">
                                    Thoughtfully designed, lovingly prepared.
                                </h3>
                                <p className="text-lg md:text-xl text-[#2C2418]/80 max-w-3xl mx-auto leading-relaxed">
                                    Because you shouldn't have to worry about what's for dinner when you're busy bringing new life into the world.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
