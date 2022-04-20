import React from 'react';
import LiveReTemplate from "../components/LiveRe/LiveReTemplate";
import LiveReHeader from "../components/LiveRe/Header/LiveReHeader";
import LiveReEditor from "../components/LiveRe/Editor/LiveReEditor";
import LiveReController from "../components/LiveRe/Controller/LiveReController";
import LiveReMain from "../components/LiveRe/Main/LiveReMain";

const LiveRe = () => {
  return (
    <LiveReTemplate>
      <LiveReHeader list={['kakao', 'naver', 'google', 'facebook']}/>
      <LiveReEditor />
      <LiveReController />
      <LiveReMain list={[1, 2, 3]}/>
    </LiveReTemplate>
  );
};

export default LiveRe;