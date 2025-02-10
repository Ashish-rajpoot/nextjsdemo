export const ID = Math.ceil(Math.random() * 100);
export const WEBSITENAME = "Alex Blog's ";
export const RANDOM_IMG_1200_600 = `https://picsum.photos/id/${ID}/1200/600`;
export const RANDOM_IMG_1200_400 = `https://picsum.photos/id/${ID}/1200/400`;
export const RANDOM_IMG_400_200 = `https://picsum.photos/id/${ID}/400/200`;

export const random_img = (width = 1200, height = 500, id = ID) => {
  return `https://picsum.photos/id/${id}/${width}/${height}`;
};
