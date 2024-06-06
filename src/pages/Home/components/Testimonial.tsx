interface TestimonialProps {
  review: string;
  userImg: any;
  userType: string;
  userName: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  review,
  userImg,
  userType,
  userName,
}) => {
  return (
    <div>
      <div className="border border-[#C33366] rounded-md p-6">
        <blockquote className="max-w-xs">
          <q>{review}</q>
        </blockquote>
      </div>
      <div className="flex items-center gap-5 mt-5">
        <img src={userImg} alt="" style={{ height: "60px" }} />
        <div className="flex flex-col gap-y-1">
          <p className="text-lg font-bold">{userName}</p>
          <p className="text-md text-[#878A99]">{userType}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
