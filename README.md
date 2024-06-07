# Langchain js for Korean 번역 레포지토리

## 번역 스타일 가이드

1. 일반 규칙

- **명확하고 간결하게**: 번역 문서는 명확하고 간결하게 작성합니다. 불필요한 수식어나 장황한 표현은 피합니다.
- **일관성 유지**: 동일한 용어와 표현을 일관되게 사용합니다.
- **독자 고려**: 번역 대상 독자의 이해 수준과 배경을 고려하여 문장을 구성합니다.

2. 용어 통일 기준

- **기술 용어**:
  - `API`: `API`
  - `Framework`: `프레임워크`
  - `Library`: `라이브러리`
  - `ThirdParty`: `써드파티`
- **일반 용어**:
  - `Installation`: `설치`
  - `Repository`: `레포지토리`
  - `Configuration`: `구성`

3. 문장 구조 및 형식

- **주어와 서술어 명확히**: 주어와 서술어를 명확히 하여 문장을 구성합니다.
  - 예: `이 도구는 다양한 기능을 제공합니다.` (O)
  - 예: `다양한 기능을 제공합니다, 이 도구는.` (X)
- **한글 문법 준수**: 한국어 문법에 맞게 문장을 작성합니다. - [문법검사기](http://speller.cs.pusan.ac.kr/)
- **형식 일관성**: 목록, 표, 코드 블록 등 문서의 형식을 일관되게 유지합니다.
  - 목록은 `-`, `*` 등을 사용하여 작성합니다.
  - 코드 블록은 ` ``` `로 감싸서 작성합니다.

4. 문법 및 맞춤법 규칙

- **띄어쓰기**: 한국어 띄어쓰기 규칙을 준수합니다.
  - 예: `이것은 예시입니다.` (O)
  - 예: `이것은예시입니다.` (X)
- **맞춤법**: 표준어와 맞춤법을 준수합니다.
  - 예: `다릅니다.` (O)
  - 예: `틀립니다.` (X)
- **외래어 표기**: 외래어는 가능한 한 외래어 표기법에 맞춰 작성합니다.
  - 예: `컴퓨터`, `소프트웨어`
- **숫자와 단위**: 숫자와 단위는 명확하게 표기합니다.
  - 예: `5MB`, `3개`

## 커밋 메시지 작성 규칙

1. **제목**:

   - 첫 글자는 소문자로 시작
   - 최대 20자 이내로 간결하게 작성
   - 영어로 작성 시 동사 원형 사용 (예: add, fix, update)

2. **본문** (선택 사항):

   - 변경 이유와 상세 내용을 설명
   - 각 항목은 '-' 또는 '\*'로 구분하여 리스트 형식으로 작성
   - 최대 72자 이내로 작성

3. **이슈 번호** (선택 사항):
   - 관련 이슈가 있을 경우, `#이슈번호` 형식으로 추가
   - 예: `fixes #123`, `closes #456`

## 기여 과정

1. **검토**:

   - 번역본을 검토하여 전반적인 번역 품질 확인
   - 오타, 문법 오류, 번역 누락 여부 점검
   - 용어 통일성 확인
   - 번역 내용의 정확성 검토
   - 원본 문서와의 일관성 확인
   - 기술적 용어 및 표현의 적절성 평가

2. **PR 요청 및 컨트리뷰터 리뷰**:

   - Pull Request(PR)을 작성할 때 컨트리뷰터를 리뷰어로 지정
   - 컨트리뷰터로부터 추가적인 검토 및 피드백 요청

3. **수정 요청**:

   - 발견된 문제점을 정리하여 번역자에게 전달
   - 수정 요청 사항을 명확히 기재 (예: 줄 번호, 오류 유형 등)

4. **재검토**:

   - 번역자가 수정한 내용을 다시 검토
   - 수정 사항이 제대로 반영되었는지 확인

5. **최종 승인**:
   - 모든 검수 절차를 통과한 번역본을 최종 승인
   - 승인된 번역본은 레포지토리에 병합

## 익스텐션

- [MarkdownLint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
- [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-md)