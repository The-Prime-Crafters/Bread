import Header from '../components/Header';

export default function Testimonials() {
    return (
        <div className="min-h-screen bg-[#FFFBEB]">
            <Header />
            <div className="pt-24">

                {/* Social Proof (Testimonials) */}
                <section id="testimonials" className="section-padding bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] overflow-hidden py-16">
                    <div className="max-w-5xl mx-auto px-4 md:px-6">
                        <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-16 text-center text-[#dd7409] animate-fadeInUp opacity-0">
                            What People Are Saying
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Testimonial 1 */}
                            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-[#FCD34D]/30 hover:shadow-xl transition-all duration-300 animate-fadeInUp opacity-0 animate-delay-200">
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-[#fcbe11]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-lg text-[#2C2418] leading-relaxed mb-4 italic">
                                    "This is exactly what I wish I had after giving birth."
                                </p>
                                <p className="text-sm text-[#2C2418]/60 font-medium">
                                    — Expecting Mother
                                </p>
                            </div>

                            {/* Testimonial 2 */}
                            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-[#FCD34D]/30 hover:shadow-xl transition-all duration-300 animate-fadeInUp opacity-0 animate-delay-400">
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-[#fcbe11]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-lg text-[#2C2418] leading-relaxed mb-4 italic">
                                    "Postpartum nutrition like this can make a real difference in recovery."
                                </p>
                                <p className="text-sm text-[#2C2418]/60 font-medium">
                                    — Postpartum Care Professional
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison Section */}
                <section id="comparison" className="section-padding bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] overflow-hidden py-16">
                    <div className="max-w-6xl mx-auto px-4 md:px-6">
                        <div className="text-center mb-16 animate-fadeInUp opacity-0">
                            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-[#dd7409]">
                                Not just another meal service
                            </h2>
                            <p className="text-lg text-[#2C2418]/70 max-w-2xl mx-auto">
                                Birth&Brodo is specifically designed for postpartum recovery — not general meal delivery.
                            </p>
                        </div>

                        {/* Mobile-Friendly Comparison Cards */}
                        <div className="space-y-4 animate-fadeInUp opacity-0 animate-delay-200">
                            {/* Comparison Item 1 */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#dd7409]/20 hover:shadow-xl transition-all">
                                <h3 className="font-semibold text-[#2C2418] mb-4 text-lg">Designed for Postpartum Recovery</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center p-4 bg-[#dd7409]/5 rounded-xl">
                                        <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-[#dd7409] flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="text-sm font-semibold text-[#dd7409]">Birth&Brodo</p>
                                    </div>
                                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                                        <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-gray-300 flex items-center justify-center">
                                            <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="text-sm font-medium text-gray-600">Others</p>
                                    </div>
                                </div>
                            </div>

                            {/* Additional comparison items could be added here similar to the original page */}

                        </div>

                        {/* CTA below comparison */}
                        <div className="text-center mt-12 animate-fadeInUp opacity-0 animate-delay-400">
                            <a
                                href="/#join"
                                className="inline-flex items-center gap-2 bg-[#dd7409] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#c66508] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                <span>Reserve Your Spot</span>
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
