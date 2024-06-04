module.exports = {
    types: [
      { value: '📝 translate', name: '📝 translate: 번역 기여' },
      { value: '🐛 typo',      name: '🐛 typo:      오타, 피드백 업데이트' },
      { value: '📚 docs',      name: '📚 docs:      README.md 혹은 문서 업데이터' },
      { value: '👷 cicd',      name: '👷 cicd:      CICD 관련 커밋' },
      { value: '🔨 Settings',  name: '🔨 Settings:  세팅 관련 커밋' },
      { value: '✔️ chore',      name: '✔️ chore:      마이너한 커밋' },
    ],

    allowCustomScopes: false,
    usePreparedCommit: true,
    skipQuestions: ['scope', 'body'],
    isTicketNumberRequired: false,
    ticketNumberPrefix: 'ISSUE-',
    ticketNumberRegExp: '\\d{1,5}',
    
    
    messages: {
      type: "커밋 타입을 골라주세요.\n",
      subject: '제목 작성해주세요.\n',
      footer: "이슈 번호가 있다면 남겨주세요. E.g.: #1523",
      confirmCommit: '마지막으로 한번 확인해주세요. ( 괜찮으면 엔터, 취소는 n, 수정은 e, 도움말 h )',
    },
  
    // limit subject length
    subjectLimit: 100,
  };