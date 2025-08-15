import FadeInSection from "@/components/FadeInSection"
import SolutionCard from "@/components/SolutionCard"

function SolutionServices() {
  return (
    <FadeInSection>
      <div className="container py-14 flex flex-col gap-20">
        <div>
          <p className='text-sm text-primary-400 border border-primary-400 px-3 py-2 rounded-full w-max font-semibold '>Solution & Services</p>
          <h1 className='mt-3 text-2xl sm:text-5xl font-bold font-palanquin'>Helping Farmers Every Step of the Way</h1>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mx-auto w-full">
          <SolutionCard />
          <SolutionCard />
          <SolutionCard />
          <SolutionCard />
        </div>
      </div>
    </FadeInSection>
  )
}

export default SolutionServices