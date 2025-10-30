import { Heart, Users, Award, Sparkles } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Loyalitas",
      description: "Wujud kesetiaan terhadap almamater tercinta"
    },
    {
      icon: Users,
      title: "Persatuan",
      description: "Memperkuat ikatan komunitas SMKN 2 Surabaya"
    },
    {
      icon: Award,
      title: "Kualitas Premium",
      description: "Material terbaik untuk kenyamanan maksimal"
    },
    {
      icon: Sparkles,
      title: "Desain Eksklusif",
      description: "Identitas unik supporter SMKN 2 Surabaya"
    }
  ];

  return (
    <section id="tentang" className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tentang Panda's Merch
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Panda's Merch adalah brand merchandise resmi yang didedikasikan untuk komunitas 
            SMKN 2 Surabaya. Kami menghadirkan produk-produk berkualitas tinggi yang tidak hanya 
            berfungsi sebagai perlengkapan sehari-hari, tetapi juga sebagai simbol kebanggaan, 
            loyalitas, dan persatuan seluruh keluarga besar SMKN 2 Surabaya.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Setiap produk dirancang dengan memadukan warna khas supporter, logo sekolah, 
            dan kata-kata motivasi yang mencerminkan semangat sportivitas dan kebersamaan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-smooth text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
