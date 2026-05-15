import { merchItems } from "@/data/mockData";
import GridCard from "@/components/GridCard";

const Merch = () => (
  <div className="min-h-screen bg-background pt-28 pb-20 px-6">
    <div className="max-w-7xl mx-auto">
      <h1 className="font-display text-5xl md:text-7xl text-foreground mb-4 tracking-tight">MERCH</h1>
      <div className="h-[2px] bg-border w-16 mb-14" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
        {merchItems.map((item, i) => (
          <GridCard
            key={item.slug}
            to={`/merch/${item.slug}`}
            image={item.image}
            title={item.title}
            subtitle={item.category}
            description={item.description}
            index={i}
            extra={<p className="font-body text-foreground font-semibold text-lg mt-3">{item.price}</p>}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Merch;
