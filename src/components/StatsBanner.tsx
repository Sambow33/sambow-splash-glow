
const StatsBanner = () => {
  return (
    <section className="py-8 bg-gradient-to-r from-cyan-500 to-pink-500">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 animate-float-up stagger-item opacity-0">
            <div className="text-3xl md:text-4xl font-bold text-white">10M+</div>
            <div className="text-white/80 text-sm md:text-base">Active Users</div>
          </div>
          <div className="p-4 animate-float-up stagger-item opacity-0">
            <div className="text-3xl md:text-4xl font-bold text-white">5M+</div>
            <div className="text-white/80 text-sm md:text-base">Daily Streams</div>
          </div>
          <div className="p-4 animate-float-up stagger-item opacity-0">
            <div className="text-3xl md:text-4xl font-bold text-white">150+</div>
            <div className="text-white/80 text-sm md:text-base">Countries</div>
          </div>
          <div className="p-4 animate-float-up stagger-item opacity-0">
            <div className="text-3xl md:text-4xl font-bold text-white">$2M+</div>
            <div className="text-white/80 text-sm md:text-base">Creator Earnings</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
