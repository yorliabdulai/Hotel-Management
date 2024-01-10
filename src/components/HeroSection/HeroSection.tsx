const HeroSection = () =>{
     return (
        <section className="flex px-4 items-center gap-12 container mx-auto">
          <div className="py-10 h-full">
            {/* Heading*/}
            <h1 className="font-heading mb-6">Explore Our Exquisite Hotel</h1>
            <p className="text-[#2e2e2e] dark: text-[#ffffffea] mb-12 max-w-lg font-normal">
                Experience an Exquisite Hotel Immersed in Rich History and Timeless Elegance.
            </p>
            <button className="btn-primary">Get Started</button>
            {/*Room Description */}
          </div>
          {/* Images */}
        </section>
     )
}
export default HeroSection;