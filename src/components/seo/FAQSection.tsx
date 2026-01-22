import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "How many EVs are registered in Washington State?",
    answer: "Washington State has one of the highest electric vehicle adoption rates in the nation. The exact count is displayed in real-time on this dashboard, sourced directly from the Washington State Department of Licensing registration data. Check the stats at the top of this page for the current total."
  },
  {
    question: "What's the difference between BEV and PHEV?",
    answer: "BEV (Battery Electric Vehicle) runs entirely on electric power with no gasoline engine—examples include Tesla Model 3 and Nissan Leaf. PHEV (Plug-in Hybrid Electric Vehicle) has both an electric motor and a gasoline engine, offering electric-only range (typically 20-50 miles) plus extended range from gasoline—examples include Toyota Prius Prime and BMW X5 xDrive45e."
  },
  {
    question: "Which counties have the most EV registrations in Washington?",
    answer: "King County leads Washington State in EV registrations, followed by Snohomish, Pierce, and Clark counties. Urban areas with higher population density, greater median income, and more extensive charging infrastructure tend to have more EV registrations. See the county chart above for current rankings."
  },
  {
    question: "How often is Washington EV Tracker updated?",
    answer: "The dashboard fetches data directly from the Washington State Department of Licensing's public dataset via their API. Each time you visit this page, you see the most current available registration data. The underlying DOL dataset is updated regularly."
  },
  {
    question: "Where does the EV registration data come from?",
    answer: "All data is sourced from the Washington State Department of Licensing (DOL) Electric Vehicle Population Data, a publicly available dataset on data.wa.gov. This is official state data covering all registered BEVs and PHEVs in Washington."
  },
  {
    question: "Does this include all registered vehicles or only new sales?",
    answer: "This dataset includes all currently registered electric vehicles in Washington State, not just new sales. It represents the total active EV population—vehicles that have current registrations with the DOL, regardless of when they were originally purchased."
  },
  {
    question: "Why might King County have more EV registrations?",
    answer: "King County's high EV registration count reflects several factors: its large population (nearly 2.3 million), higher median household income, extensive public and workplace charging infrastructure, the presence of major technology employers, environmental awareness, and favorable local policies. Seattle's urban density also makes EVs practical for many commuters."
  },
  {
    question: "Is this data official?",
    answer: "Yes, the underlying data comes from official Washington State Department of Licensing records. This dashboard is an independent visualization of that public data—it makes the information more accessible but is not affiliated with or endorsed by any government agency."
  },
  {
    question: "How should I interpret BEV vs PHEV shares?",
    answer: "The BEV vs PHEV breakdown shows the proportion of fully electric vehicles versus plug-in hybrids in Washington's registered EV population. A higher BEV share indicates strong adoption of all-electric vehicles, while a notable PHEV share suggests many owners value the flexibility of hybrid range. The trend has shifted toward BEVs as battery technology and charging infrastructure improve."
  },
  {
    question: "What is the average electric range of EVs in Washington?",
    answer: "The average electric-only range is calculated from all registered EVs in the state and displayed in the stats section above. This average varies based on the mix of vehicles registered—newer BEVs with larger batteries raise the average, while older EVs and PHEVs (with smaller battery-only ranges) lower it."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-20 py-12 border-t border-border/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Frequently Asked Questions
        </h2>
        
        <p className="text-muted-foreground mb-8">
          Find answers to common questions about Washington State electric vehicle registrations, 
          data sources, and how to interpret the information on this dashboard.
        </p>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-secondary/30 border border-border/50 rounded-lg px-4 data-[state=open]:bg-secondary/50"
            >
              <AccordionTrigger className="text-left hover:no-underline py-4">
                <span className="font-medium text-foreground">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
