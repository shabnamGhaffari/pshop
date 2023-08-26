import Link from "next/link";

const Banner = () => {
  return (
    //    Welcome Area Start #####
    <section
      className="welcome_area bg-img background-overlay"
      style={{"background-image": "url(images/bg-img/bg-1.jpg)"}}>
      <div className="flex container px-12 mx-auto h-full items-center justify-end">
        <div className="hero-content">
          {/* <h6>asoss</h6> */}
          <h2>New Collection</h2>
          <Link href="/products" className="btn essence-btn">
            مشاهده کالکشن 
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
