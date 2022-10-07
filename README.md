
# 🐶 댕과사전
![KakaoTalk_20221006_213533514](https://user-images.githubusercontent.com/90291796/194318131-e9b56e93-30bc-4714-a68a-2863372fe655.jpg)


## 🐕 프로젝트 소개
반려견을 위한 견주들의 커뮤니티!<br>
- 진료 잘하는 동물 병원은 어딘지? 
- 시설이 깔끔한 애견 호텔은 어딘지? 
- 필요 없는 애견 용품이 있다면 장터에 올려 필요한 사람에게 판매해요 
- 커뮤니티를 통해 후기 글도 쓰고 내 강아지 자랑까지!

견주들끼리 「 댕과사전 」 에서 정보를 공유해봐요!

<a href="https://daengtionary.site/" target="_blank">🐩 댕과사전 지금 이용하기!!!</a><br>
<a href="https://www.notion.so/b16810b040254299a360deec190d1f4f" target="_blank">🐩 댕과사전 팀 Notion!!!</a>


## 🐕‍🦺 댕과사전 주요 기능
- 카카오톡 소셜 회원가입 & 로그인
- 댕매칭(산책, 애견카페) 으로 우리 아이 친구 찾아주기!
- 댕플레이스(병원, 호텔 정보) 에서 꿀팁 얻어가기!
- 장터에서 글 쓰고 댕톡(장터 유저 간 1대1 채팅)으로 중고물품 거래하기!
- 커뮤니티에 자유롭게 글쓰기!


## 🐩 프로젝트 아키텍처
![아키텍처](https://user-images.githubusercontent.com/90291796/194321105-fa5a54bf-6540-45ab-878f-53e34b8e86cb.png)


### 🦮 STACK
<div align=center>
<div>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/>
  <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/>
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white"/>
</div>
<div>
  <img src="https://img.shields.io/badge/Kakao Api-FFCD00?style=for-the-badge&logo=Kakao&logoColor=black"/>
  <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
  <img src="https://img.shields.io/badge/Swiper-6332F6?style=for-the-badge&logo=Swiper&logoColor=white"/>
</div>  
<div>
  <img src="https://img.shields.io/badge/Lodash-3492FF?style=for-the-badge&logo=Lodash&logoColor=white"/>
  <img src="https://img.shields.io/badge/Stomp-353535?style=for-the-badge&logoColor=white">
  <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"/>
</div>
</div>

---

### 🐕 DEV-Tool
<div align=center>
<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white"/>
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white"/>
<img src="https://img.shields.io/badge/Gether Town-6476df?style=for-the-badge&logoColor=white"/>
</div>

---

### 💥 Trouble Shooting

<details>
<summary> 1. 최신글 리랜더링 문제 </summary>
<div markdown="1">

<br>

💢 **문제 상황**  : 기술적인 문제로 response에 Post한 게시글 내용이 내려받지 못 할 때, 유저 편의성을 위해 새로고침(화면 깜빡임) 없이 글 리젠을 해야했다.

<br><br>
  
1️⃣ **시도 방안 1** : <br>
useEffect 의존성 배열에 postModal 이라는 state를 추가해서 submit 함수가 실행될 때 해당스테이트를 변경하여 리랜더링을 유도하는 방법
```javascript
const [postModal, setPostModal] = useState(false);
useEffect(() => {
	dispatch(getCommunityPostListThunk(pageNum));
	}, [pageNum, postModal]);  // 이와같이 의존성 배열에 postModal을 수정
```
post 를 요청하는 form 은 현재 모달로 구현한 상태였고 그래서 모달이 닫힐 때<br>
useState(false) 의 상태가 변경 되는 것을 사용해서 리랜더링을 해보려고 했지만 의도대로 되지 않았다
<br>
2️⃣ **시도 방안 2** : <br>
Redux Toolkit 모듈에 resetPosted() 리듀서 함수를 추가하고,<br>
페이지에서 postCheck 라는 state를 만들어주고 초기값으로 1을 준다. <br>
이후 아래와 같이 해당 state 값을 submit를 담당하는 함수에 넣었다.

```javascript
// communitySlice.js
// ... 은 생략된 코드를 나타낸 것

const communitySlice = createSlice({
  name: "community",
  initialState,
  reducers: {
  ...
  	/** 게시글을 최신화 하기위한 리듀서 함수 */
    resetPosted(state) {
      state.community = initialState.community // 페이지에서 state 를 initialState 덮어 씌운다
    }
  },
  ...

```

```javascript
// 
// ...는 생략된 코드

// POST가 되는 걸 감지할 state
const [postCheck, setPostCheck] = useState(1)

...

// SUBMIT 함수
const onSubmitHandler = async (e) => {

...

  if (response.state === 200 ) {
    modalHandler();
    const newPostCheck = postCheck + 1	// postCheck 초기값 1dp 
    setPostCheck(newPostCheck)			// state 변경해준다
    alert("게시글 등록 완료!")
  }
};
```

새로운 useEffect 를 만들어서 의존성 배열에 위에서 만든 postCheck 상태를 넣고
아래와 같이 작성했다.

```javascript
useEffect(()=>{
  dispatch(resetPosted()) // 게시글을 최신화 하기위한 리듀서
  dispatch(getCommunityPostListThunk(0)) // 모든 게시물 get해오는 Thuck 함수 
}, [postCheck])
```
<br><br>
  
⚖️ **자체 평가** : 프로젝트 마감이 코앞이다 보니 궁여지책으로 만들어낸 방법이긴 하지만<br>
이 방법은 아무리 생각해도 좋은 방법은 아닌것 같다.<br>
처음 내가 언급한 것처럼 post 요청을 할때 response에 다시 내려받은 후 <br>
redux 리듀서 함수를 사용해 스테이트 관리를 해주면 좀더 쉽게 구현할 수 있었다고 생각한다.

 <br>

✅ **결과** : <br>
![tbs0001](https://user-images.githubusercontent.com/90291796/194450555-f4f97c91-bfe8-4e62-82ea-835416a48cca.gif)
</div>
</details>

<br><br>

<details>
<summary> 2. 트러블슈팅 주제 </summary>
<div markdown="1">

  <br>
💢 **문제 상황** :
  <br>
	
1️⃣ **시도 방안 1** :<br>
	
2️⃣ **시도 방안 2** :<br>

<br>
	
✅ **결과** : <br>
</div>
</details>

---

### 댕과사전 팀원들!

|Role|Name|Github|
|---|---|---|
|팀장*BE|박진우|https://github.com/Jinu0729|
|BE|안승현|https://github.com/zemiles|
|BE|한동훈|https://github.com/hdonghun|
|부팀장*FE|김민석|https://github.com/cordplace|
|FE|하병노|https://github.com/hahbr88|
|FE|박재정|https://github.com/PARK-JAE-JEONG|
|UX/UI|오소영||
