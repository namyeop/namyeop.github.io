---
title: "풀스택 프레임워크"
date: "2024-05-19T19:29:03.284Z"
description: "React Conf 이후 풀스택 프레임워크 논쟁"
---

2024 React Conf에서 React 메타 프레임워크인 REMIX가 React Router와의 통합을 발표했다. React 위에서 돌아가는 웹 애플리케이션을 만드는 개발자 경험은 바뀌는 게 없겠지만,
이 통합에서 파생되어 "풀스택 프레임워크"가 무엇인지에 대해 X에서 열띤 논쟁이 촉발되었다.

먼저 Laravel의 Founder인 Taylor Otwell이 "Laravel" 혹은 "Rails"가 말하는 풀스택 프레임워크가 NextJS나 Remix가 말하는 풀스택 프레임워크가 다른 것을 지칭하고 있다고 말했다.
NextJS나 Remix와 같은 클라이언트 사이드에서 출발한 프레임워크들은 GET 요청을 더 잘 할 수 있게 만들어주는 도구일 뿐, 유효성 검사/ORM/인증/이메일 전송 등 Batteries Included라고 표현할만한 기능들이
포함되어 있지는 않다고 보고 있다(Batteries Included Slang의 적절한 번역어는 무엇이 있을까...).

Remix의 Founder Micheal Jackson은 ORM과 같은 기능이 내장되어 있지 않다는 점에서 JS 프레임워크 생태계가 발전할 여지는 있다는 데 동의하지만, 발전된 웹 기술에 맞춰 정말로 빠르게 실제 프로덕트를 만들 수 있는 프레임워크는
React Router나 NextJS가 더 적합하다고 반박했다. 요즘 Saas 써서 메일 보내지, 프레임워크 내장 기능으로 메일 보내는 기능은 만들 필요도, 쓸 필요도 없다고 덧붙였다.

관점의 차이는 분명하다 - "Fully" 동작하는 웹 애플리케이션 기능을 "구현"할 수 있으면 되는가, "내장"된 기능으로 구현할 수 있어야 하는가?

황성현 님이 [말씀하신 것](https://x.com/0xd669/status/1776814233784889452)처럼 빠르게 가설 검증하고 시장을 테스트해야 하는 입장에서는 "풀스택 프레임워크"는 꼭 필요하다.
한 걸음 더 들어가서, 어떤 풀스택 프레임워크가 더 적합하냐도 논쟁거리가 될 수 있을 것 같다.

Laravel, Next 모두 하나로 수렴하며 닮아간다. 이게 내 결론이다.
MVC 패턴 잘 지키다가 갑자기 One Page Development라고 들고나온 [Volt](https://livewire.laravel.com/docs/volt)는 좀 뜬금없다.
Next(더 정확히는 Vercel SDK)는 Component 렌더링하는 코드에서 [Raw SQL](https://vercel.com/docs/storage/vercel-postgres/sdk#sql)을 쓰기도 한다. 이상하다.

p.s.
뭐가 됐든 이제 스프링은 논쟁에 끼워주지도 않는다는 사실...
프론트/백 나눠서 API 규격 맞추고 문서 Versioning 하는 거 덜 하면서 개발 할 수 있을 것 같은데...
