"use client";
import Heading from "@/src/app/components/Heading";
import { Rating } from "@mui/material";
import moment from "moment";
import Avatar from "@/src/app/components/products/Avatar";
interface ListRatingProps {
  product: any;
}
const ListRating: React.FC<ListRatingProps> = ({ product }) => {
  return (
    <div>
      <Heading title="Product Review" />
      <div className="text-sm mt-2">
        {product.reviews.map((review: any) => (
          <div key={review.id} className="max-w-[500px]">
            <div className="flex items-center gap-2">
              <Avatar src={review?.user.image} />
              <div className="font-semibold">{review?.user.name}</div>
              <div className="font-light">
                {moment(review.createDate).fromNow()}
              </div>
            </div>
            <div className="mt-2">
              <Rating value={review.rating} readOnly />
              <div className="ml-1">{review.comment}</div>
              <hr className="my-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListRating;
