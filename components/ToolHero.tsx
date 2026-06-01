
type ToolHeroProps = {
    title: string;
    description: string;
  };
  
  export default function ToolHero({
    title,
    description,
  }: ToolHeroProps) {
    return (
      <section className="max-w-4xl mx-auto py-16">
  
          <h1 className="
          text-4xl
          md:text-6xl
          font-bold
          ">
          {title}
        </h1>
  
          <p className="
          text-lg
          md:text-xl
          text-gray-600
          ">
          {description}
        </p>
  
      </section>
    );
  }