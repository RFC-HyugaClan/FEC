/* eslint-disable max-len */
import React, {
  useEffect,
  useState,
  useContext,
} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import StarRatingSelector from './StarRatingSelector';
import Recomendation from './Recomendation';
import Characteristics from './Characteristics';
import Summary from './Summary';
import Body from './Body';
import UsernameEmail from './UsernameEmail';
import AddPictureWindow from './AddPictureWindow';
import Thumbnails from './Thumbnails';
import GlobalContext from '../../../Context';

function WriteNewReviewModal(data) {
  /* ===== Inheritated State ===== */
  const { setReviewModal } = data;
  /* ===== Local State ===== */
  const [charData, setCharData] = useState([]);
  const [charID, setCharID] = useState({});
  /* ===== State for POST request ===== */
  const [recommend, setRecommend] = useState(null);
  const [rating, setRating] = useState(null);
  const [charRating, setCharRating] = useState({});
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [photoUrls, setPhotoUrls] = useState([]);
  const productId = useContext(GlobalContext);
  /* ===== Helper Functions ===== */
  const postReview = {
    product_id: productId.currentProduct.id,
    rating,
    summary,
    body,
    recommend,
    name: username,
    email,
    photos: photoUrls,
    characteristics: charRating,
  };

  function submitNewReview() {
    axios.post('api/reviews/', postReview)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    axios.get(`api/reviews/meta/?product_id=${productId.currentProduct.id}`)
      .then((response) => {
        setCharData(response.data.characteristics);
        return response;
      })
      .then((response) => {
        Object.keys(response.data.characteristics).map((key) => {
          // eslint-disable-next-line no-shadow
          setCharID((charID) => ({
            ...charID,
            [key]: response.data.characteristics[key].id,
          }));
          return null;
        });
        return response;
      })
      .then((response) => console.log('Axios reviews meta response: ', response));
  }, [productId.currentProduct.id]);
  return (
    <Wrapper>
      <Modal>
        <StarRatingSelector rating={rating} setRating={setRating} />
        <Recomendation recommend={recommend} setRecommend={setRecommend} />
        <Characteristics chars={charData} charID={charID} setCharRating={setCharRating} />
        <Summary summary={summary} setSummary={setSummary} />
        <Body body={body} setBody={setBody} />
        <UsernameEmail username={username} setUsername={setUsername} email={email} setEmail={setEmail} />
        <Thumbnails photoUrls={photoUrls} />
        <AddPictureWindow setPhotoUrls={setPhotoUrls} photoUrls={photoUrls} />
        <BtnWrapper>
          <ActionBtn color="white" backgroundColor="green" onClick={() => { submitNewReview(); setReviewModal(false); }}>Submit</ActionBtn>
          <ActionBtn color="black" backgroundColor="red" onClick={() => setReviewModal(false)}>Cancel</ActionBtn>
        </BtnWrapper>
      </Modal>
    </Wrapper>
  );
}

export default WriteNewReviewModal;

const Wrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, .5);
`;

const Modal = styled.div`
  display: grid;
  transition: opacity .2s ease;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 80vh;
  width: 50vw;
  background: #ffffff;
  border: 5px solid black;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ActionBtn = styled.button`
  &:hover{
    cursor: pointer;
  }
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  padding-top: 5px;
  margin: 1em;
  border: 2px;
  height: 50px;
  width: 100px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const BtnWrapper = styled.div`
  display: inline-block;
`;
