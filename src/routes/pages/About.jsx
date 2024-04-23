
const images = [
  '/public/profile/1.jpg',
  '/public/profile/2.jpg',
  '/public/profile/3.jpg',
  '/public/profile/4.jpg',
  '/public/profile/5.jpg',
  '/public/profile/6.jpg',
  '/public/profile/7.jpg',
  '/public/profile/8.jpg',
  '/public/profile/9.jpg',
  '/public/profile/10.jpg',
];

const ProfilePage = () => {
  return (
    <div>
      <h1>Мой профиль</h1>
      <div className="prof">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;