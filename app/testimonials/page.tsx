import Header from '../components/Header';

export default function Testimonials() {
    return (
        <div className="min-h-screen bg-[#F5EFE7]">
            <Header />
            <div className="pt-24">

                {/* Social Proof (Testimonials) */}
                <section className="section-padding bg-[#F5EFE7] overflow-hidden py-16">
                    <div className="max-w-5xl mx-auto px-4 md:px-6">
                        <h2 className="text-5xl md:text-6xl font-serif font-light mb-16 text-center text-[#2C2418] leading-tight">
                            What People Are Saying
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Testimonial 1 */}
                            <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="flex mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-6 h-6 text-[#F4B942]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-xl text-[#2C2418] leading-relaxed mb-6 font-serif italic">
                                    "This is exactly what I wish I had after giving birth."
                                </p>
                                <p className="text-sm text-[#2C2418]/60 font-medium">
                                    — Expecting Mother
                                </p>
                            </div>

                            {/* Testimonial 2 */}
                            <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="flex mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-6 h-6 text-[#F4B942]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-xl text-[#2C2418] leading-relaxed mb-6 font-serif italic">
                                    "Postpartum nutrition like this can make a real difference in recovery."
                                </p>
                                <p className="text-sm text-[#2C2418]/60 font-medium">
                                    — Postpartum Care Professional
                                </p>
                            </div>

                            {/* Testimonial 3 */}
                            <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="flex mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-6 h-6 text-[#F4B942]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-xl text-[#2C2418] leading-relaxed mb-6 font-serif italic">
                                    "Finally, a meal service that understands what new mothers actually need."
                                </p>
                                <p className="text-sm text-[#2C2418]/60 font-medium">
                                    — New Mother
                                </p>
                            </div>

                            {/* Testimonial 4 */}
                            <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="flex mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-6 h-6 text-[#F4B942]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-xl text-[#2C2418] leading-relaxed mb-6 font-serif italic">
                                    "The perfect gift for any new parent. Thoughtful and practical."
                                </p>
                                <p className="text-sm text-[#2C2418]/60 font-medium">
                                    — Family Member
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="section-padding bg-white overflow-hidden py-16">
                    <div className="max-w-6xl mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl md:text-6xl font-serif font-light mb-6 text-[#2C2418] leading-tight">
                                Not just another meal service
                            </h2>
                            <p className="text-xl text-[#2C2418]/70 max-w-3xl mx-auto leading-relaxed">
                                Birth&Brodo is specifically designed for postpartum recovery — not general meal delivery.
                            </p>
                        </div>

                        {/* Comparison Grid */}
                        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            <div className="bg-gradient-to-br from-[#F4B942] to-[#E5AA32] rounded-2xl p-8 text-center shadow-lg">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center">
                                    <svg className="w-8 h-8 text-[#2C2418]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-[#2C2418] mb-2">Postpartum-Specific</h3>
                                <p className="text-[#2C2418]/80 text-sm">Designed for recovery</p>
                            </div>

                            <div className="bg-gradient-to-br from-[#F4B942] to-[#E5AA32] rounded-2xl p-8 text-center shadow-lg">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center">
                                    <svg className="w-8 h-8 text-[#2C2418]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-[#2C2418] mb-2">Nutrient-Dense</h3>
                                <p className="text-[#2C2418]/80 text-sm">Quality ingredients</p>
                            </div>

                            <div className="bg-gradient-to-br from-[#F4B942] to-[#E5AA32] rounded-2xl p-8 text-center shadow-lg">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center">
                                    <svg className="w-8 h-8 text-[#2C2418]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-[#2C2418] mb-2">Made with Care</h3>
                                <p className="text-[#2C2418]/80 text-sm">Chef-prepared meals</p>
                            </div>
                        </div>

                        {/* CTA below comparison */}
                        <div className="text-center mt-16">
                            <a
                                href="/#join"
                                className="inline-flex items-center gap-2 bg-[#F4B942] text-[#2C2418] px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#E5AA32] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
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
