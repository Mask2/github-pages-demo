import React, { useEffect, useRef } from 'react'
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import classnames from 'classnames'

import Ming01 from '../images/ming_01.png'
import Ming02 from '../images/ming_02.png'
import Ming03 from '../images/ming_03.png'
import MobileMing01 from '../images/mobile_ming_01.png'
import MobileMing02 from '../images/mobile_ming_02.png'
import MobileMing03 from '../images/mobile_ming_03.png'
import IconCalendar from '../images/svg/icon_calendar.svg'
import IconFavorite from '../images/svg/icon_favorite.svg'
import IconLocation from '../images/svg/icon_location.svg'
import TemVideo from '../images/tem_video.png'
import LineDots from '../images/bg_line_dots.png'
import WaveDots from '../images/bg_wave_dots.png'
import CellTop from '../images/bg_cell_top.png'
import CellBottom from '../images/bg_cell_bottom.png'

import {
  menuListData,
  cardListData,
  symptomListData,
  serviceListData,
} from '../utils/constant'
import Annotate from '../components/Annotate'
import { gsap, ScrollTrigger } from '../utils/initGsap'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      fontFamily: theme.typography.body1.fontFamily,
      overflowX: 'hidden',
    },
    sectionOne: {
      height: theme.spacing(90),
      background: theme.palette.background.main,
      position: 'relative',
      [theme.breakpoints.only('xs')]: {
        height: '140vw',
      },
    },
    sectionOneContainer: {
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
    },
    sectionOneInfo: {
      left: theme.spacing(2),
      bottom: theme.spacing(35),
      zIndex: 4,
      lineHeight: 2,
      fontWeight: '600',
      [theme.breakpoints.only('xs')]: {
        lineHeight: 1.4,
        fontWeight: '500',
        left: theme.spacing(2.5),
        bottom: theme.spacing(12),
      },
    },
    sectionOneImg: {
      position: 'relative',
      zIndex: 3,
      marginTop: 'auto',
      display: 'block',
      maxHeight: '100%',
      [theme.breakpoints.only('xs')]: {
        width: '100%',
      },
    },
    sectionOneTitle: {
      left: 0,
      right: 0,
      textAlign: 'center',
      zIndex: 4,
      bottom: theme.spacing(10),
      fontSize: theme.typography.h1.fontSize,
      fontWeight: 'lighter',
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.h3.fontSize,
        bottom: theme.spacing(2.25),
      },
    },
    circle: {
      width: theme.spacing(49.25),
      height: theme.spacing(49.25),
      borderRadius: '50%',
      [theme.breakpoints.only('xs')]: {
        width: theme.spacing(56),
        height: theme.spacing(56),
      },
    },
    circleOne: {
      background: theme.palette.background.main124,
      left: theme.spacing(19),
      bottom: theme.spacing(-5),
      zIndex: '2',
      [theme.breakpoints.only('xs')]: {
        left: theme.spacing(-30),
        bottom: theme.spacing(-14.5),
      },
    },
    circleTwo: {
      background: theme.palette.background.main140,
      right: theme.spacing(21.5),
      bottom: theme.spacing(16),
      zIndex: '1',
      [theme.breakpoints.only('xs')]: {
        right: theme.spacing(-10),
        bottom: theme.spacing(-2),
      },
    },
    sectionTwo: {
      backgroundImage: `url(${WaveDots}),${theme.palette.background.dark}`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPositionY: 'center',
      backgroundPositionX: 'center',
      position: 'relative',
      zIndex: 10,
    },
    sectionThree: {
      background: theme.palette.background.light,
      position: 'relative',
    },
    sectionFour: {
      background: theme.palette.background.light,
      overflowX: 'hidden',
    },
    sectionFive: {
      background: theme.palette.background.light,
      position: 'relative',
    },
    sectionSix: {
      backgroundColor: theme.palette.background.default,
    },
    mingImage: {
      display: 'block',
      width: '100%',
    },
    sectionMotion: {
      position: 'absolute',
    },
    temVideo: {
      display: 'block',
      width: '100%',
    },
    sectionText: {
      fontSize: theme.typography.h2.fontSize,
      fontWeight: 'bolder',
      zIndex: 2,
      position: 'absolute',
    },
    cardWrapper: {},
    questionWrapper: {
      width: theme.spacing(48),
      height: theme.spacing(49),
      position: 'relative',
      flexShrink: 0,
      margin: theme.spacing(2),
      transform: 'rotateY(0deg)',
      transformStyle: 'preserve-3d',
      perspective: 1000,
      cursor: 'pointer',
      transition: 'transform 0.7s ease-in-out',
      '&:hover': {
        transform: 'rotateY(-180deg)',
      },
    },
    questionContent: {
      width: '100%',
      height: '100%',
      borderRadius: theme.spacing(4),
      border: `6px solid ${theme.palette.primary.main}`,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      flexDirection: 'column',
      backfaceVisibility: 'hidden',
      position: 'absolute',
      zIndex: 1,
    },
    questionIcon: {
      width: theme.spacing(30),
      display: 'block',
    },
    answerWrapper: {
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      borderRadius: theme.spacing(4),
      border: `6px solid ${theme.palette.primary.main}`,
      backgroundColor: theme.palette.background.default,
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      zIndex: -1,
      transform: 'rotateY(180deg) translateZ(1px)',
    },
    answerImg: {
      display: 'block',
      width: '100%',
    },
    dotsWrapper: {},
    dot: {
      width: theme.spacing(1.5),
      height: theme.spacing(1.5),
      margin: theme.spacing(0, 1.5),
      backgroundColor: theme.palette.background.paper,
      borderRadius: '50%',
    },
    symptomIcon: {
      display: 'block',
      mb: theme.spacing(2),
    },
    serviceWrapper: {
      backgroundImage: `url(${CellTop}),url(${CellBottom})`,
      backgroundRepeat: 'no-repeat,no-repeat',
      backgroundSize: '60%,70%',
      backgroundPositionY: 'top,bottom',
      backgroundPositionX: 'left,right',
      borderRadius: theme.spacing(1),
    },
    serviceCard: {
      display: 'block',
      height: theme.spacing(30),
    },
    footerTitle: {
      backgroundImage: `url(${LineDots})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPositionY: 'center',
      backgroundPositionX: 'left',
    },
    buttonRoot: {
      width: '32%',
      borderRadius: theme.spacing(1),
      color: theme.palette.primary.light,
      borderColor: theme.palette.primary.light,
      fontSize: theme.typography.h6.fontSize,
      fontWeight: 'bolder',
    },
    buttonOutlined: {
      '&:hover': {
        color: theme.palette.secondary.light,
        backgroundColor: theme.palette.primary.light,
      },
    },
    iconRoot: {
      textAlign: 'center',
    },
    imageIcon: {
      height: '100%',
      display: 'block',
    },
  })
)

const ParallaxDemo = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.only('xs'))
  const flipCardsContainerRef = useRef(null)

  // section one parallax motion
  useEffect(() => {
    gsap.to('.section-one-info', {
      ease: 'none',
      scrollTrigger: {
        trigger: '.section-one-info',
        start: 'top center',
        end: 'bottom top',
        pin: true,
        scrub: true,
        pinSpacing: false,
      },
    })
    gsap.to('.section-one-circle-one', {
      y: -400,
      ease: 'none',
      scrollTrigger: {
        trigger: '.section-one',
        start: 'top top',
        scrub: true,
      },
    })
    gsap.to('.section-one-circle-two', {
      y: -400,
      ease: 'none',
      scrollTrigger: {
        trigger: '.section-one',
        start: 'top top',
        scrub: true,
      },
    })
    gsap.to('.section-one-ming', {
      y: 400,
      ease: 'none',
      scrollTrigger: {
        trigger: '.section-one',
        scrub: true,
        start: 'top top',
      },
    })
  }, [])

  // section four flip cards motion
  useEffect(() => {
    let flipCards = gsap.utils.toArray('.flip-card')

    // gsap.to(flipCards, {
    //   x: -400 * (flipCards.length - 1),
    //   ease: 'none',
    //   scrollTrigger: {
    //     trigger: '.flip-cards-container',
    //     pin: true,
    //     scrub: true,
    //     // snap: 1 / (flipCards.length - 1),
    //     start: 'center center',
    //     end: () => `end +=${flipCardsContainerRef.current.offsetHeight}`,
    //     pinSpacing: false,
    //     markers: true,
    //   },
    // })
    const t1 = gsap.timeline(flipCards, {
      scrollTrigger: {
        trigger: '.section-four',
        pin: true,
        scrub: true,
        start: 'top 200px',
        end: '+=398',
        pinSpacing: false,
        markers: true,
      },
    })
    flipCards.forEach((flipCard) => {
      t1.fromTo(flipCard, { rotateY: 0 }, { rotateY: 180, duration: 1 })
        .to('.flip-cards-container', { x: '-=398', duration: 2 })
        .fromTo(flipCard, { rotateY: 180 }, { rotateY: 0, duration: 1 })
    })
  }, [])

  // section five symptoms fade in motion
  useEffect(() => {
    const symptomsFadeIn = gsap.fromTo(
      '.symptom-card',
      { autoAlpha: 0, y: -100 },
      { duration: 2, autoAlpha: 1, y: 0, stagger: 0.6 }
    )
    ScrollTrigger.create({
      trigger: '.symptom-card-wrapper',
      animation: symptomsFadeIn,
      start: 'top center',
      toggleActions: 'play none none none',
      once: true,
    })
  }, [])

  // section six services fade in motion
  useEffect(() => {
    const servicesFadeIn = gsap.fromTo(
      '.service-card',
      { autoAlpha: 0, y: -50 },
      { duration: 1, autoAlpha: 1, y: 0, stagger: 0.3 }
    )
    ScrollTrigger.create({
      trigger: '.service-card-wrapper',
      animation: servicesFadeIn,
      start: 'top center',
      toggleActions: 'play none none none',
      once: true,
    })
  }, [])

  const flipCards = (params) =>
    cardListData.map((card) => (
      <Box
        className={classnames(classes.questionWrapper, 'flip-card')}
        key={card.label}
      >
        <Box className={classes.questionContent}>
          <Box
            fontSize='h5.fontSize'
            fontWeight='fontWeightBolder'
            color='secondary.main'
            component='h5'
            m={0}
            mt={4}
          >
            {card.label}
          </Box>
          <img
            className={classes.questionIcon}
            src={card.icon}
            alt={card.label}
          />
          <Box
            fontSize='h5.fontSize'
            fontWeight='fontWeightBolder'
            color='primary.light'
            component='h5'
            m={0}
          >
            {card.question}
          </Box>
        </Box>
        <Box className={classes.answerWrapper}>
          <img
            className={classes.answerImg}
            src={card.answer}
            alt={card.label}
          />
        </Box>
      </Box>
    ))

  const dots = () => (
    <Box
      mt={4}
      display='flex'
      justifyContent='center'
      className={classes.dotsWrapper}
    >
      {[...Array(5)].map((dot, index) => (
        <Box className={classes.dot} key={index}>
          {dot}
        </Box>
      ))}
    </Box>
  )

  const symptoms = (params) =>
    symptomListData.map((symptom) => (
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        key={symptom.label}
        className='symptom-card'
      >
        <img
          className={classes.symptomIcon}
          src={symptom.icon}
          alt={symptom.label}
        />
        <Typography component='div'>
          <Box
            fontSize='h6.fontSize'
            fontWeight='fontWeightBold'
            color='text.primary'
          >
            {symptom.label}
          </Box>
        </Typography>
      </Box>
    ))

  return (
    <Box className={classes.root}>
      <Box
        className={classnames(
          classes.sectionOne,
          menuListData[0].id,
          'section-one'
        )}
      >
        <Container className={classes.sectionOneContainer} maxWidth='lg'>
          <Typography
            className={classnames(
              classes.sectionMotion,
              classes.sectionOneInfo,
              'section-one-info'
            )}
            component='div'
          >
            <Box
              fontSize='h6.fontSize'
              color='primary.contrastText'
              letterSpacing='1px'
            >
              張達明
              <br />
              鼻咽癌康復者」
              <br />
              早期鼻咽癌存活率：
              {matches ? (
                <Box fontSize='h5.fontSize' component='div' fontWeight='600'>
                  90%+
                </Box>
              ) : (
                <Box fontSize='h5.fontSize' component='span'>
                  90%+
                </Box>
              )}
            </Box>
          </Typography>
          <Box
            className={classnames(
              classes.sectionMotion,
              classes.circle,
              classes.circleOne,
              'section-one-circle-one'
            )}
          ></Box>
          <Box
            className={classnames(
              classes.sectionMotion,
              classes.circle,
              classes.circleTwo,
              'section-one-circle-two'
            )}
          ></Box>
          <img
            className={classnames(classes.sectionOneImg, 'section-one-ming')}
            src={matches ? MobileMing01 : Ming01}
            alt='Cheung Tat Ming 01'
          />
          <Box
            className={classnames(
              classes.sectionMotion,
              classes.sectionOneTitle
            )}
            color='primary.contrastText'
          >
            GO LIVE AGAIN
          </Box>
        </Container>
      </Box>
      <Box
        className={classnames(classes.sectionTwo, menuListData[1].id)}
        py={15}
      >
        <Container maxWidth='sm'>
          <Box
            fontSize='body2.fontSize'
            fontWeight='fontWeightLight'
            color='primary.contrastText'
            component='p'
            lineHeight={2}
          >
            根據世界衛生組織2018年的數據顯示，香港鼻咽癌發病率是世界主要城市的5-6倍¹。
            <br />
            其實不論年紀、性別及背景，任何人士都有機會患上鼻咽癌。
            <br />
            作為鼻咽癌康復者兼香港著名喜劇演員，張達明先生曾因忽略身體警號而延誤求醫。
            <br />
            想掌握健康，即使不幸患癌都能積極開展第二人生?
            <br />
            觀看以下影片，由達明親述進行「早期鼻咽癌篩查」的重要性！
          </Box>
          <Box mt={8}>
            <img className={classes.temVideo} src={TemVideo} alt='tem video' />
          </Box>
        </Container>
      </Box>
      <Box className={classnames(classes.sectionThree, menuListData[2].id)}>
        <img
          className={classes.mingImage}
          src={matches ? MobileMing02 : Ming02}
          alt='Cheung Tat Ming 02'
        />
        <Box
          left='20%'
          bottom='35%'
          color='secondary.light'
          className={classes.sectionText}
        >
          鼻咽癌
        </Box>
        <Box
          left='55%'
          bottom='35%'
          color='primary.contrastText'
          className={classes.sectionText}
        >
          真的離你很遠？
        </Box>
      </Box>
      <Box
        className={classnames(
          classes.sectionFour,
          menuListData[3].id,
          'section-four'
        )}
        py={15}
      >
        <Container maxWidth='sm'>
          <Box
            fontSize='h5.fontSize'
            fontWeight='fontWeightBold'
            color='primary.contrastText'
            component='h5'
          >
            鼻咽癌又稱「廣東癌」
          </Box>
          <Box
            fontSize='body2.fontSize'
            fontWeight='fontWeightLight'
            lineHeight={2}
            color='primary.contrastText'
            mt={4}
            component='p'
          >
            鼻咽癌的高發地區為東南亞和南中國。當中在香港、廣東和廣西的發病率特別高，因此也被稱為「廣東癌」。本港每年有六百至八百宗鼻咽癌病例，因此鼻咽癌是不可忽視的十大癌症之一，它更是過去十年間45-64歲男士五大常見癌症之一²。
          </Box>
        </Container>
        <Box>
          <Box
            fontSize='h4.fontSize'
            fontWeight='fontWeightBold'
            color='primary.contrastText'
            component='h4'
            textAlign='center'
          >
            齊來認清真相!
          </Box>
          <Box
            className='flip-cards-container'
            display='flex'
            ref={flipCardsContainerRef}
          >
            {flipCards()}
          </Box>
          {dots()}
        </Box>
      </Box>
      <Box className={classnames(classes.sectionFive, menuListData[4].id)}>
        <img
          className={classnames(classes.mingImage, menuListData[5].id)}
          src={matches ? MobileMing03 : Ming03}
          alt='Cheung Tat Ming 03'
        />
        <Box
          className={classes.sectionText}
          left='20%'
          bottom='50%'
          color='primary.contrastText'
        >
          鼻咽癌不能「預防」
        </Box>
        <Box
          className={classes.sectionText}
          right='10%'
          bottom='30%'
          color='primary.contrastText'
        >
          卻能「提防」
        </Box>
      </Box>
      <Box
        className={classnames(classes.sectionSix, menuListData[6].id)}
        py={10}
      >
        <Container maxWidth='md'>
          <Box display='flex' flexDirection='column' alignItems='center'>
            <Typography component='div'>
              <Box
                fontSize='body1.fontSize'
                fontWeight='fontWeightLight'
                textAlign='center'
                color='primary.contrastText'
              >
                鼻咽癌的症狀容易與傷風感冒混淆而令人忽略，80%患者在初診時已是晚期⁷。
              </Box>
              <Box
                fontSize='h5.fontSize'
                fontWeight='fontWeightBold'
                color='primary.contrastText'
                textAlign='center'
                mt={3}
              >
                鼻咽癌與感冒相似的徵狀包括：
              </Box>
            </Typography>
            <Box display='flex' mt={2} className='symptom-card-wrapper'>
              {symptoms()}
            </Box>
            <Typography component='div'>
              <Box
                fontSize='h5.fontSize'
                fontWeight='fontWeightBold'
                color='primary.contrastText'
                textAlign='center'
                mt={10}
              >
                怎樣才能「提防」患癌？
              </Box>
              <Box
                fontSize='body1.fontSize'
                fontWeight='fontWeightLight'
                textAlign='center'
                color='primary.contrastText'
                lineHeight={2}
                mt={3}
              >
                研究顯示，進行早期鼻咽癌篩查能有效找出「隱形」患者，
                儘早接受適當治療，
                <br />
                令患者存活率可高達9成⁸。
              </Box>
            </Typography>
            <Box
              className={classes.serviceWrapper}
              py={10}
              px={8}
              mt={8}
              bgcolor='background.paper'
            >
              <Typography component='div'>
                <Box
                  fontSize='h4.fontSize'
                  fontWeight='fontWeightBold'
                  color='text.secondary'
                >
                  Take2 Prophecy™
                </Box>
                <Box
                  fontSize='h4.fontSize'
                  fontWeight='fontWeightBold'
                  color='text.disabled'
                >
                  早期鼻咽癌篩查服務特色
                </Box>
                <Box
                  mt={4}
                  display='flex'
                  flexWrap='wrap'
                  justifyContent='space-around'
                  className='service-card-wrapper'
                >
                  {serviceListData.map((service) => (
                    <Box key={service.label} my={2} className='service-card'>
                      <img
                        className={classes.serviceCard}
                        src={service.img}
                        alt={service.label}
                      />
                    </Box>
                  ))}
                </Box>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <footer>
        <Box
          bgcolor='primary.main'
          color='primary.contrastText'
          fontSize='h5.fontSize'
          fontWeight='fontWeightBold'
          py={4}
          className={classnames(classes.footerTitle, menuListData[7].id)}
        >
          <Container maxWidth='lg'>联系我们</Container>
        </Box>
        <Box py={6} pb={10}>
          <Container maxWidth='lg'>
            <Typography component='div'>
              <Box
                fontSize='h5.fontSize'
                fontWeight='fontWeightBold'
                color='text.disabled'
              >
                要掌握健康，就要立即行動！
                <br />
                歡迎透過下列方式與我們聯絡：
              </Box>
            </Typography>
            <Box
              width='100%'
              display='flex'
              justifyContent='space-between'
              my={4}
            >
              <Button
                classes={{
                  root: classes.buttonRoot,
                  outlined: classes.buttonOutlined,
                }}
                size='large'
                variant='outlined'
                startIcon={
                  <Icon classes={{ root: classes.iconRoot }}>
                    <img
                      className={classes.imageIcon}
                      src={IconCalendar}
                      alt='calendar'
                    />
                  </Icon>
                }
              >
                立即預約
              </Button>
              <Button
                classes={{
                  root: classes.buttonRoot,
                  outlined: classes.buttonOutlined,
                }}
                size='large'
                variant='outlined'
                startIcon={
                  <Icon classes={{ root: classes.iconRoot }}>
                    <img
                      className={classes.imageIcon}
                      src={IconFavorite}
                      alt='favorite'
                    />
                  </Icon>
                }
              >
                查看服務覆蓋點
              </Button>
              <Button
                classes={{
                  root: classes.buttonRoot,
                  outlined: classes.buttonOutlined,
                }}
                size='large'
                variant='outlined'
                startIcon={
                  <Icon classes={{ root: classes.iconRoot }}>
                    <img
                      className={classes.imageIcon}
                      src={IconLocation}
                      alt='location'
                    />
                  </Icon>
                }
              >
                成為會員
              </Button>
            </Box>
            <Typography component='div'>
              <Box
                fontSize='subtitle1.fontSize'
                fontWeight='fontWeightBold'
                color='primary.light'
                lineHeight={3}
              >
                聯絡資料
              </Box>
              <Box
                fontSize='overline.fontSize'
                fontWeight='fontWeightBold'
                lineHeight={2}
                color='primary.light'
              >
                電話: (852) 3613 0536
                <br />
                電郵: customer.support@take2.health
                <br />
                Facebook: Take2 Health
                <br />
                網站: take2health.net
              </Box>
            </Typography>
            <Box my={6} bgcolor='text.disabled' height='1px'></Box>
            <Annotate></Annotate>
          </Container>
        </Box>
      </footer>
    </Box>
  )
}

export default ParallaxDemo
