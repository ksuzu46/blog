import axios from 'axios';
import Avatar from './avatar';
import DateFormatter from './date-formatter';

export default function PostHeader({ title, date }) {
    
  return (
    <>
      <div className="blog-post-heading-wrapper">
          <h3 className="blog-post-heading">{title}</h3>
          <h6 className="blog-post-heading-date">
          <DateFormatter dateString={date} />
          </h6>
      </div>
    </>
  );
}
