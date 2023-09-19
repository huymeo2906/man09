import { useState, useCallback } from "react";
import SettingCollumn from "../components/SettingCollumn";
import PortalPopup from "../components/PortalPopup";
import styles from "./DashboardManagerProjects.module.css";

const DashboardManagerProjects = () => {
  const [isSettingCollumnOpen, setSettingCollumnOpen] = useState(false);

  const openSettingCollumn = useCallback(() => {
    setSettingCollumnOpen(true);
  }, []);

  const closeSettingCollumn = useCallback(() => {
    setSettingCollumnOpen(false);
  }, []);

  const onFrameContainer66Click = useCallback(() => {
    // Please sync "Dashboard / Nhân viên" to the project
  }, []);

  const onCardContainerClick = useCallback(() => {
    // Please sync "Projects / Detail / Group By Deadline" to the project
  }, []);

  const onCardContainer1Click = useCallback(() => {
    // Please sync "Projects / Detail / Group By Deadline" to the project
  }, []);

  const onCardContainer2Click = useCallback(() => {
    // Please sync "Projects / Detail / Group By Deadline" to the project
  }, []);

  const onCardContainer3Click = useCallback(() => {
    // Please sync "Projects / Detail / Group By Deadline" to the project
  }, []);

  const onCardContainer4Click = useCallback(() => {
    // Please sync "Projects / Detail / Group By Deadline" to the project
  }, []);

  const onCardContainer5Click = useCallback(() => {
    // Please sync "Projects / Detail / Group By Deadline" to the project
  }, []);

  const onIconButtonContainerClick = useCallback(() => {
    // Please sync "Dashboard / Nhân viên" to the project
  }, []);

  return (
    <>
      <div className={styles.dashboardManagerProjects}>
        <div className={styles.headerParent}>
          <div className={styles.header}>
            <div className={styles.downParent}>
              <img className={styles.downIcon} alt="" src="/down.svg" />
              <div className={styles.textParent}>
                <div className={styles.text}>Hôm nay</div>
                <div className={styles.number}>
                  <div className={styles.div}>05</div>
                </div>
                <div className={styles.statistical1}>
                  <img
                    className={styles.ucommentDotsIcon}
                    alt=""
                    src="/down.svg"
                  />
                  <div className={styles.tasknameWrapper}>
                    <div className={styles.taskname}>3</div>
                  </div>
                </div>
                <div className={styles.statistical1}>
                  <img
                    className={styles.ucommentDotsIcon}
                    alt=""
                    src="/down.svg"
                  />
                  <div className={styles.tasknameWrapper}>
                    <div className={styles.taskname}>3</div>
                  </div>
                </div>
                <div className={styles.statistical1}>
                  <img
                    className={styles.ucommentDotsIcon}
                    alt=""
                    src="/down.svg"
                  />
                  <div className={styles.tasknameWrapper}>
                    <div className={styles.taskname}>3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.headerGroup}>
              <div className={styles.header1}>
                <div className={styles.flow1Parent}>
                  <img className={styles.flow1Icon} alt="" src="/flow-1.svg" />
                  <div className={styles.avt}>
                    <div className={styles.userpic} />
                    <div className={styles.state} />
                    <div className={styles.label}>KA</div>
                  </div>
                  <div className={styles.overviewParent}>
                    <div className={styles.overview}>Overview</div>
                    <div className={styles.employees}>Employees</div>
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.memberParent}>
                    <div className={styles.member}>
                      <div className={styles.avt1}>
                        <div className={styles.userpic1} />
                        <div className={styles.state1} />
                        <div className={styles.label1}>KA</div>
                      </div>
                      <div className={styles.avt2}>
                        <div className={styles.userpic2} />
                        <div className={styles.state1} />
                        <div className={styles.label1}>NH</div>
                      </div>
                      <div className={styles.avt3}>
                        <div className={styles.userpic3} />
                        <div className={styles.state1} />
                        <div className={styles.label1}>HN</div>
                      </div>
                      <div className={styles.avt4}>
                        <img
                          className={styles.ovalCopy3}
                          alt=""
                          src="/down.svg"
                        />
                        <div className={styles.wrapper}>
                          <div className={styles.taskname}>+3</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.input}>
                      <div className={styles.usearchParent}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/usearch.svg"
                        />
                        <input
                           type="text"
                          placeholder="Search..."
                          value={searchText}
                          onChange={handleInputChange}
                              />
                      </div>
                      <img
                        className={styles.uangleDownIcon}
                        alt=""
                        src="/down.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.uplusWrapper}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uplus.svg"
                    />
                  </div>
                  <div className={styles.memberParent}>
                    <div className={styles.component2}>
                      <div className={styles.ucommentDotsWrapper}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/ucommentdots.svg"
                        />
                      </div>
                      <div className={styles.component2Child} />
                    </div>
                    <div className={styles.component2}>
                      <div className={styles.ucommentDotsWrapper}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/unotifiacation.svg"
                        />
                      </div>
                      <div className={styles.component2Child} />
                    </div>
                    <div className={styles.unsplashfgUd73uZmWrapper}>
                      <img
                        className={styles.unsplashfgUd73uZmIcon}
                        alt=""
                        src="/unsplashfg-ud73u-zm@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.filterParent}>
                  <div className={styles.filter}>
                    <div className={styles.textParent}>
                      <img
                        className={styles.ufilterIcon}
                        alt=""
                        src="/ufilter.svg"
                      />
                      <div className={styles.bLc}>Bộ lọc</div>
                    </div>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uangleright.svg"
                    />
                  </div>
                  <div className={styles.layout}>
                    <div className={styles.project}>
                      <div className={styles.ulistUiAltParent}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/down.svg"
                        />
                        <div className={styles.bLc}>List</div>
                      </div>
                      <img
                        className={styles.downIcon1}
                        alt=""
                        src="/down.svg"
                        onClick={openSettingCollumn}
                      />
                    </div>
                    <div className={styles.project1}>
                      <div className={styles.ulistUiAltParent}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/down.svg"
                        />
                        <div className={styles.bLc}>Bảng</div>
                      </div>
                      <img
                        className={styles.downIcon2}
                        alt=""
                        src="/down.svg"
                      />
                    </div>
                    <div className={styles.project1}>
                      <div className={styles.ulistUiAltParent}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/down.svg"
                        />
                        <div className={styles.bLc}>Lịch</div>
                      </div>
                      <img
                        className={styles.downIcon2}
                        alt=""
                        src="/down.svg"
                      />
                    </div>
                    <div className={styles.project1}>
                      <div className={styles.ulistUiAltParent}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/down.svg"
                        />
                        <div className={styles.bLc}>Timeline</div>
                      </div>
                      <img
                        className={styles.downIcon2}
                        alt=""
                        src="/down.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.time}>
                    <div className={styles.usearchParent}>
                      <img
                        className={styles.uangleDoubleRightIcon}
                        alt=""
                        src="/ucalendaralt.svg"
                      />
                      <div className={styles.spXpTheoParent}>
                        <div className={styles.spXpTheo}>Hiển thị</div>
                        <div className={styles.employees}>Ngày hôm nay</div>
                      </div>
                    </div>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uangledown.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.instanceParent}>
                  <div className={styles.hmNayParent}>
                    <div className={styles.hmNay}>{`Đang & sắp thực hiện`}</div>
                    <div className={styles.frameParent1}>
                      <div className={styles.parent}>
                        <div className={styles.div2}>12</div>
                        <div className={styles.vicCnLmWrapper}>
                          <div className={styles.bLc}>Dự án</div>
                        </div>
                      </div>
                      <div className={styles.lineParent}>
                        <div className={styles.frameChild} />
                        <div className={styles.frameParent2}>
                          <div className={styles.noteHorizontalParent}>
                            <div className={styles.textParent}>
                              <div className={styles.noteHorizontalChild} />
                              <div className={styles.ulistUiAltParent}>
                                <div className={styles.container}>
                                  <div className={styles.div}>05</div>
                                </div>
                                <div className={styles.miCGiao}>Dự án mới</div>
                              </div>
                            </div>
                            <div className={styles.textParent}>
                              <div className={styles.noteHorizontalItem} />
                              <div className={styles.ulistUiAltParent}>
                                <div className={styles.container}>
                                  <div className={styles.div}>02</div>
                                </div>
                                <div className={styles.miCGiao}>
                                  Đang thực hiện
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.tagGroup}>
                            <div className={styles.noteHorizontalInner} />
                            <div className={styles.ulistUiAltParent}>
                              <div className={styles.container}>
                                <div className={styles.div}>05</div>
                              </div>
                              <div className={styles.miCGiao}>
                                Quá thời gian kế hoạch
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.hmNayGroup}>
                    <div className={styles.hmNay}>Sắp hoàn thành</div>
                    <div className={styles.frameParent1}>
                      <div className={styles.parent}>
                        <div className={styles.div2}>06</div>
                        <div className={styles.vicCnLmWrapper}>
                          <div className={styles.bLc}>Dự án</div>
                        </div>
                      </div>
                      <div className={styles.lineParent}>
                        <div className={styles.frameChild} />
                        <div className={styles.frameParent2}>
                          <div className={styles.noteHorizontalGroup}>
                            <div className={styles.textParent}>
                              <div className={styles.ellipseDiv} />
                              <div className={styles.ulistUiAltParent}>
                                <div className={styles.container}>
                                  <div className={styles.div}>02</div>
                                </div>
                                <div className={styles.miCGiao}>Review</div>
                              </div>
                            </div>
                            <div className={styles.noteHorizontal4}>
                              <div className={styles.ellipseDiv} />
                              <div className={styles.ulistUiAltParent}>
                                <div className={styles.container}>
                                  <div className={styles.div}>02</div>
                                </div>
                                <div className={styles.miCGiao}>
                                  Sắp hết hạn
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.tagGroup}>
                            <div className={styles.noteHorizontalChild2} />
                            <div className={styles.ulistUiAltParent}>
                              <div className={styles.container}>
                                <div className={styles.div}>04</div>
                              </div>
                              <div className={styles.miCGiao}>
                                Chờ nghiệm thu
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={styles.frameParent11}
                    onClick={onFrameContainer66Click}
                  >
                    <div className={styles.chart1Wrapper}>
                      <div className={styles.chart1}>
                        <div className={styles.chart1Child} />
                        <div className={styles.chart1Item} />
                        <div className={styles.chart1Inner} />
                        <div className={styles.chart1Child1} />
                        <div className={styles.chart1Child2} />
                        <div className={styles.chart1Child3} />
                        <div className={styles.chart1Child4} />
                        <div className={styles.frameParent12}>
                          <div className={styles.wrapper5}>
                            <b className={styles.b}>150</b>
                          </div>
                          <div className={styles.thng22022}>Tháng 2/2022</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.noteHorizontalContainer}>
                      <div className={styles.tagGroup}>
                        <div className={styles.noteHorizontalChild} />
                        <div className={styles.ulistUiAltParent}>
                          <div className={styles.wrapper6}>
                            <div className={styles.div}>21.39%</div>
                          </div>
                          <div className={styles.miCGiao}>Chưa thực hiện</div>
                        </div>
                      </div>
                      <div className={styles.tagGroup}>
                        <div className={styles.noteHorizontalItem} />
                        <div className={styles.ulistUiAltParent}>
                          <div className={styles.wrapper6}>
                            <div className={styles.div}>21.83%</div>
                          </div>
                          <div className={styles.miCGiao}>Đang thực hiện</div>
                        </div>
                      </div>
                      <div className={styles.tagGroup}>
                        <div className={styles.ellipseDiv} />
                        <div className={styles.ulistUiAltParent}>
                          <div className={styles.wrapper6}>
                            <div className={styles.div}>08.31%</div>
                          </div>
                          <div className={styles.miCGiao}>Review</div>
                        </div>
                      </div>
                      <div className={styles.tagGroup}>
                        <div className={styles.noteHorizontalChild2} />
                        <div className={styles.ulistUiAltParent}>
                          <div className={styles.wrapper6}>
                            <div className={styles.div}>29.59%</div>
                          </div>
                          <div className={styles.miCGiao}>Nghiệm thu</div>
                        </div>
                      </div>
                      <div className={styles.tagGroup}>
                        <div className={styles.noteHorizontalInner} />
                        <div className={styles.ulistUiAltParent}>
                          <div className={styles.wrapper6}>
                            <div className={styles.div}>17.26%</div>
                          </div>
                          <div className={styles.miCGiao}>Quá thời gian</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent18}>
                <div className={styles.filterGroup}>
                  <div className={styles.filter1}>
                    <div className={styles.textParent}>
                      <img
                        className={styles.usearchIcon}
                        alt=""
                        src="/uplus1.svg"
                      />
                      <div className={styles.headerGroup}>
                        <div className={styles.spXpTheo1}>Sắp xếp theo</div>
                        <div className={styles.mcU}>Thêm dự án</div>
                      </div>
                    </div>
                    <img
                      className={styles.uangleDownIcon}
                      alt=""
                      src="/down.svg"
                    />
                  </div>
                  <div className={styles.filterContainer}>
                    <div className={styles.filter2}>
                      <div className={styles.textParent}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/usortamountup.svg"
                        />
                        <div className={styles.headerGroup}>
                          <div className={styles.spXpTheo}>Sắp xếp theo</div>
                          <div className={styles.employees}>Mới nhất</div>
                        </div>
                      </div>
                      <img
                        className={styles.usearchIcon}
                        alt=""
                        src="/uangledown.svg"
                      />
                    </div>
                    <div className={styles.filter2}>
                      <div className={styles.textParent}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/ufilter1.svg"
                        />
                        <div className={styles.headerGroup}>
                          <div className={styles.spXpTheo}>Lọc theo</div>
                          <div className={styles.employees}>Tất cả dự án</div>
                        </div>
                      </div>
                      <img
                        className={styles.usearchIcon}
                        alt=""
                        src="/uangledown.svg"
                      />
                    </div>
                    <div className={styles.filter2}>
                      <div className={styles.textParent}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/ucreatedashboard.svg"
                        />
                        <div className={styles.headerGroup}>
                          <div className={styles.spXpTheo}>Hiển thị</div>
                          <div className={styles.employees}>Dạng danh sách</div>
                        </div>
                      </div>
                      <img
                        className={styles.usearchIcon}
                        alt=""
                        src="/uangledown.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.cardParent}>
                  <div className={styles.card} onClick={onCardContainerClick}>
                    <div className={styles.productPreviewMoParent}>
                      <div className={styles.productPreview}>
                        E-Work - Quản lý công việc
                      </div>
                      <div className={styles.iconspaceTeam}>10/02/2022</div>
                    </div>
                    <div className={styles.productPreviewMoGroup}>
                      <div className={styles.productPreview1}>BU CRM</div>
                      <div className={styles.iconspaceTeam1}>10/02/2022</div>
                    </div>
                    <div className={styles.frameParent19}>
                      <div className={styles.tagParent}>
                        <div className={styles.tag}>
                          <img
                            className={styles.usearchIcon}
                            alt=""
                            src="/uclock.svg"
                          />
                          <div className={styles.bLc}>Còn lại 7 ngày</div>
                        </div>
                        <div className={styles.upaperclipParent}>
                          <img
                            className={styles.usearchIcon}
                            alt=""
                            src="/upaperclip.svg"
                          />
                          <div className={styles.bLc}>06</div>
                        </div>
                        <div className={styles.taskProgress}>
                          <img
                            className={styles.usearchIcon}
                            alt=""
                            src="/ucheckcircle.svg"
                          />
                          <div className={styles.bLc}>7/12</div>
                        </div>
                      </div>
                      <div className={styles.progress}>
                        <div className={styles.rectangleCopy6Wrapper}>
                          <div className={styles.rectangleCopy6} />
                        </div>
                        <div className={styles.div17}>65%</div>
                      </div>
                      <div className={styles.member1}>
                        <div className={styles.avt5}>
                          <div className={styles.userpic4} />
                          <div className={styles.state4} />
                          <div className={styles.label4}>KA</div>
                        </div>
                        <div className={styles.avt6}>
                          <div className={styles.userpic5} />
                          <div className={styles.state4} />
                          <div className={styles.label4}>NH</div>
                        </div>
                        <div className={styles.avt7}>
                          <div className={styles.userpic6} />
                          <div className={styles.state4} />
                          <div className={styles.label4}>HN</div>
                        </div>
                        <div className={styles.avt8}>
                          <img
                            className={styles.ovalCopy31}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.wrapper11}>
                            <div className={styles.spXpTheo}>+3</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.tag1}>
                        <div className={styles.daysLeft1}>
                          01/11/2022 - 31/12/2022
                        </div>
                      </div>
                      <img
                        className={styles.icMoreIcon}
                        alt=""
                        src="/ic-more.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.card1} onClick={onCardContainer1Click}>
                    <div className={styles.productPreviewMoParent}>
                      <div className={styles.productPreview}>
                        Lixil - Ecommerces
                      </div>
                      <div className={styles.iconspaceTeam}>10/02/2022</div>
                    </div>
                    <div className={styles.productPreviewMoGroup}>
                      <div className={styles.productPreview1}>BU CRM</div>
                      <div className={styles.iconspaceTeam1}>10/02/2022</div>
                    </div>
                    <div className={styles.frameParent20}>
                      <div className={styles.tagGroup}>
                        <div className={styles.tag}>
                          <img
                            className={styles.usearchIcon}
                            alt=""
                            src="/uclock1.svg"
                          />
                          <div className={styles.bLc}>Còn lại 2 ngày</div>
                        </div>
                        <div className={styles.upaperclipParent}>
                          <img
                            className={styles.usearchIcon}
                            alt=""
                            src="/upaperclip1.svg"
                          />
                          <div className={styles.bLc}>06</div>
                        </div>
                        <div className={styles.taskProgress}>
                          <img
                            className={styles.usearchIcon}
                            alt=""
                            src="/ucheckcircle1.svg"
                          />
                          <div className={styles.bLc}>7/12</div>
                        </div>
                      </div>
                      <div className={styles.progress1}>
                        <div className={styles.rectangleCopy6Container}>
                          <div className={styles.rectangleCopy61} />
                        </div>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/ucheckcircle2.svg"
                        />
                      </div>
                      <div className={styles.member1}>
                        <div className={styles.avt5}>
                          <div className={styles.userpic4} />
                          <div className={styles.state4} />
                          <div className={styles.label4}>KA</div>
                        </div>
                        <div className={styles.avt6}>
                          <div className={styles.userpic5} />
                          <div className={styles.state4} />
                          <div className={styles.label4}>NH</div>
                        </div>
                        <div className={styles.avt7}>
                          <div className={styles.userpic6} />
                          <div className={styles.state4} />
                          <div className={styles.label4}>HN</div>
                        </div>
                        <div className={styles.avt8}>
                          <img
                            className={styles.ovalCopy31}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.wrapper11}>
                            <div className={styles.spXpTheo}>+3</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.tag3}>
                        <div className={styles.daysLeft1}>
                          01/11/2022 - 31/12/2022
                        </div>
                      </div>
                      <img
                        className={styles.icMoreIcon}
                        alt=""
                        src="/ic-more.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.card1} onClick={onCardContainer2Click}>
                    <div className={styles.productPreviewMoParent}>
                      <div className={styles.productPreview}>
                        E-Cabinet - Họp không giấy tờ
                      </div>
                      <div className={styles.iconspaceTeam}>10/02/2022</div>
                    </div>
                    <div className={styles.productPreviewMoGroup}>
                      <div className={styles.productPreview1}>BU CRM</div>
                      <div className={styles.iconspaceTeam1}>10/02/2022</div>
                    </div>
                    <div className={styles.frameParent19}>
                      <div className={styles.tagParent}>
                        <div className={styles.tag}>
                          <img
                            className={styles.usearchIcon}
                            alt=""
                            src="/uclock2.svg"
                          />
                          <div className={styles.bLc}>Còn lại 7 ngày</div>
                        </div>
                        <div className={styles.upaperclipParent}>
                          <img
                            className={styles.usearchIcon}
                            alt=""
                            src="/upaperclip1.svg"
                          />
                          <div className={styles.bLc}>06</div>
                        </div>
                        <div className={styles.taskProgress}>
                          <img
                            className={styles.usearchIcon}
                            alt=""
                            src="/ucheckcircle1.svg"
                          />
                          <div className={styles.bLc}>7/12</div>
                        </div>
                      </div>
                      <div className={styles.progress}>
                        <div className={styles.rectangleCopy6Wrapper}>
                          <div className={styles.rectangleCopy6} />
                        </div>
                        <div className={styles.div17}>65%</div>
                      </div>
                      <div className={styles.member1}>
                        <div className={styles.avt5}>
                          <div className={styles.userpic4} />
                          <div className={styles.state4} />
                          <div className={styles.label4}>KA</div>
                        </div>
                        <div className={styles.avt6}>
                          <div className={styles.userpic5} />
                          <div className={styles.state4} />
                          <div className={styles.label4}>NH</div>
                        </div>
                        <div className={styles.avt7}>
                          <div className={styles.userpic6} />
                          <div className={styles.state4} />
                          <div className={styles.label4}>HN</div>
                        </div>
                        <div className={styles.avt8}>
                          <img
                            className={styles.ovalCopy31}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.wrapper11}>
                            <div className={styles.spXpTheo}>+3</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.tag1}>
                        <div className={styles.daysLeft1}>
                          01/11/2022 - 31/12/2022
                        </div>
                      </div>
                      <img
                        className={styles.icMoreIcon}
                        alt=""
                        src="/ic-more.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.card1} onClick={onCardContainer3Click}>
                    <div className={styles.productPreviewMoParent}>
                      <div className={styles.productPreview}>
                        Panoee - Tour thực tế ảo
                      </div>
                      <div className={styles.iconspaceTeam}>10/02/2022</div>
                    </div>
                    <div className={styles.productPreviewMoGroup}>
                      <div className={styles.productPreview1}>BU CRM</div>
                      <div className={styles.iconspaceTeam1}>10/02/2022</div>
                    </div>
                    <div className={styles.frameParent19}>
                      <div className={styles.tagParent1}>
                        <div className={styles.tag}>
                          <img
                            className={styles.usearchIcon}
                            alt=""
                            src="/uclock3.svg"
                          />
                          <div className={styles.bLc}>Còn lại 0 ngày</div>
                        </div>
                        <div className={styles.upaperclipParent}>
                          <img
                            className={styles.usearchIcon}
                            alt=""
                            src="/upaperclip1.svg"
                          />
                          <div className={styles.bLc}>06</div>
                        </div>
                        <div className={styles.taskProgress}>
                          <img
                            className={styles.usearchIcon}
                            alt=""
                            src="/ucheckcircle1.svg"
                          />
                          <div className={styles.bLc}>7/12</div>
                        </div>
                      </div>
                      <div className={styles.progress}>
                        <div className={styles.rectangleCopy6Wrapper1}>
                          <div className={styles.rectangleCopy63} />
                        </div>
                        <div className={styles.div17}>90%</div>
                      </div>
                      <div className={styles.member1}>
                        <div className={styles.avt5}>
                          <div className={styles.userpic4} />
                          <div className={styles.state4} />
                          <div className={styles.label4}>KA</div>
                        </div>
                        <div className={styles.avt6}>
                          <div className={styles.userpic5} />
                          <div className={styles.state4} />
                          <div className={styles.label4}>NH</div>
                        </div>
                        <div className={styles.avt7}>
                          <div className={styles.userpic6} />
                          <div className={styles.state4} />
                          <div className={styles.label4}>HN</div>
                        </div>
                        <div className={styles.avt8}>
                          <img
                            className={styles.ovalCopy31}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.wrapper11}>
                            <div className={styles.spXpTheo}>+3</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.tag1}>
                        <div className={styles.daysLeft1}>
                          01/11/2022 - 31/12/2022
                        </div>
                      </div>
                      <img
                        className={styles.icMoreIcon}
                        alt=""
                        src="/ic-more.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.card1} onClick={onCardContainer4Click}>
                    <div className={styles.productPreviewMoParent}>
                      <div className={styles.productPreview}>
                        Lixil - Ecommerces
                      </div>
                      <div className={styles.iconspaceTeam}>10/02/2022</div>
                    </div>
                    <div className={styles.productPreviewMoGroup}>
                      <div className={styles.productPreview1}>BU CRM</div>
                      <div className={styles.iconspaceTeam1}>10/02/2022</div>
                    </div>
                    <div className={styles.frameParent19}>
                      <div className={styles.tagParent}>
                        <div className={styles.tag}>
                          <img
                            className={styles.usearchIcon}
                            alt=""
                            src="/uclock2.svg"
                          />
                          <div className={styles.bLc}>Còn lại 10 ngày</div>
                        </div>
                        <div className={styles.upaperclipParent}>
                          <img
                            className={styles.usearchIcon}
                            alt=""
                            src="/upaperclip1.svg"
                          />
                          <div className={styles.bLc}>06</div>
                        </div>
                        <div className={styles.taskProgress}>
                          <img
                            className={styles.usearchIcon}
                            alt=""
                            src="/ucheckcircle1.svg"
                          />
                          <div className={styles.bLc}>7/12</div>
                        </div>
                      </div>
                      <div className={styles.progress}>
                        <div className={styles.rectangleCopy6Wrapper}>
                          <div className={styles.rectangleCopy6} />
                        </div>
                        <div className={styles.div17}>65%</div>
                      </div>
                      <div className={styles.member1}>
                        <div className={styles.avt5}>
                          <div className={styles.userpic4} />
                          <div className={styles.state4} />
                          <div className={styles.label4}>KA</div>
                        </div>
                        <div className={styles.avt6}>
                          <div className={styles.userpic5} />
                          <div className={styles.state4} />
                          <div className={styles.label4}>NH</div>
                        </div>
                        <div className={styles.avt7}>
                          <div className={styles.userpic6} />
                          <div className={styles.state4} />
                          <div className={styles.label4}>HN</div>
                        </div>
                        <div className={styles.avt8}>
                          <img
                            className={styles.ovalCopy31}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.wrapper11}>
                            <div className={styles.spXpTheo}>+3</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.tag1}>
                        <div className={styles.daysLeft1}>
                          01/11/2022 - 31/12/2022
                        </div>
                      </div>
                      <img
                        className={styles.icMoreIcon}
                        alt=""
                        src="/ic-more.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.card5} onClick={onCardContainer5Click}>
                    <div className={styles.productPreviewMoParent}>
                      <div className={styles.productPreview}>
                        E-Cabinet - Họp không giấy tờ
                      </div>
                      <div className={styles.iconspaceTeam}>10/02/2022</div>
                    </div>
                    <div className={styles.productPreviewMoGroup}>
                      <div className={styles.productPreview1}>BU CRM</div>
                      <div className={styles.iconspaceTeam1}>10/02/2022</div>
                    </div>
                    <div className={styles.frameParent19}>
                      <div className={styles.tagParent3}>
                        <div className={styles.tag}>
                          <img
                            className={styles.usearchIcon}
                            alt=""
                            src="/uclock4.svg"
                          />
                          <div className={styles.bLc}>Còn lại 7 ngày</div>
                        </div>
                        <div className={styles.upaperclipParent}>
                          <img
                            className={styles.usearchIcon}
                            alt=""
                            src="/upaperclip1.svg"
                          />
                          <div className={styles.bLc}>06</div>
                        </div>
                        <div className={styles.taskProgress}>
                          <img
                            className={styles.usearchIcon}
                            alt=""
                            src="/ucheckcircle1.svg"
                          />
                          <div className={styles.bLc}>7/12</div>
                        </div>
                      </div>
                      <div className={styles.progress}>
                        <div className={styles.rectangleCopy6Wrapper3}>
                          <div className={styles.rectangleCopy65} />
                        </div>
                        <div className={styles.div17}>70%</div>
                      </div>
                      <div className={styles.member1}>
                        <div className={styles.avt5}>
                          <div className={styles.userpic4} />
                          <div className={styles.state4} />
                          <div className={styles.label4}>KA</div>
                        </div>
                        <div className={styles.avt6}>
                          <div className={styles.userpic5} />
                          <div className={styles.state4} />
                          <div className={styles.label4}>NH</div>
                        </div>
                        <div className={styles.avt7}>
                          <div className={styles.userpic6} />
                          <div className={styles.state4} />
                          <div className={styles.label4}>HN</div>
                        </div>
                        <div className={styles.avt8}>
                          <img
                            className={styles.ovalCopy31}
                            alt=""
                            src="/oval-copy-3.svg"
                          />
                          <div className={styles.wrapper11}>
                            <div className={styles.spXpTheo}>+3</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.tag1}>
                        <div className={styles.daysLeft1}>
                          01/11/2022 - 31/12/2022
                        </div>
                      </div>
                      <img
                        className={styles.icMoreIcon}
                        alt=""
                        src="/ic-more.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.menuMini}>
            <div className={styles.frameParent25}>
              <div className={styles.uangleDoubleRightWrapper}>
                <img
                  className={styles.uangleDoubleRightIcon}
                  alt=""
                  src="/uangledoubleright.svg"
                />
              </div>
              <div className={styles.iconButtonParent}>
                <div
                  className={styles.iconButton}
                  onClick={onIconButtonContainerClick}
                >
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/uhomealt.svg"
                  />
                </div>
                <div className={styles.iconButton1}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/ulistul.svg"
                  />
                </div>
                <div className={styles.iconButton1}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/usuitcase.svg"
                  />
                </div>
                <div className={styles.iconButton1}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/ufilemedicalalt.svg"
                  />
                </div>
                <div className={styles.iconButton1}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/usitemap.svg"
                  />
                </div>
                <div className={styles.iconButton1}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/uusersalt.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.uangleDoubleRightWrapper}>
              <img
                className={styles.uangleDoubleRightIcon}
                alt=""
                src="/usetting.svg"
              />
            </div>
          </div>
          <div className={styles.vectorParent}>
            <img className={styles.frameInner} alt="" src="/rectangle-1.svg" />
            <div className={styles.image1Parent}>
              <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
              <div className={styles.trangChParent}>
                <div className={styles.overview}>Trang chủ</div>
                <div className={styles.frameParent26}>
                  <div className={styles.mennuParent}>
                    <div className={styles.mennu}>
                      <img
                        className={styles.usearchIcon}
                        alt=""
                        src="/ucreatedashboard1.svg"
                      />
                      <div className={styles.hmNayWrapper}>
                        <div className={styles.hmNay2}>Dashboard</div>
                      </div>
                      <img
                        className={styles.uangleRightIcon1}
                        alt=""
                        src="/uangleright1.svg"
                      />
                    </div>
                    <div className={styles.frameParent27}>
                      <div className={styles.frameParent28}>
                        <div className={styles.downGroup}>
                          <img
                            className={styles.downIcon}
                            alt=""
                            src="/down.svg"
                          />
                          <div className={styles.thiGianWrapper}>
                            <div className={styles.div}>Thời gian</div>
                          </div>
                        </div>
                        <div className={styles.frameWrapper1}>
                          <div className={styles.menuFilterParent}>
                            <div className={styles.menuFilter}>
                              <div className={styles.usearchParent}>
                                <img
                                  className={styles.ucommentDotsIcon}
                                  alt=""
                                  src="/down.svg"
                                />
                                <div className={styles.search}>Hôm nay</div>
                              </div>
                              <div className={styles.wrapper17}>
                                <div className={styles.div}>06</div>
                              </div>
                            </div>
                            <div className={styles.menuFilter1}>
                              <div className={styles.textParent}>
                                <img
                                  className={styles.ucommentDotsIcon}
                                  alt=""
                                  src="/down.svg"
                                />
                                <div className={styles.bLc}>Tuần này</div>
                              </div>
                              <div className={styles.wrapper17}>
                                <div className={styles.div}>06</div>
                              </div>
                              <img
                                className={styles.ucommentDotsIcon}
                                alt=""
                                src="/down.svg"
                              />
                            </div>
                            <div className={styles.menuFilter}>
                              <div className={styles.usearchParent}>
                                <img
                                  className={styles.ucommentDotsIcon}
                                  alt=""
                                  src="/down.svg"
                                />
                                <div className={styles.search}>Tháng này</div>
                              </div>
                              <div className={styles.wrapper17}>
                                <div className={styles.div}>06</div>
                              </div>
                            </div>
                            <div className={styles.tab}>
                              <img
                                className={styles.ucommentDotsIcon}
                                alt=""
                                src="/down.svg"
                              />
                              <div className={styles.input1}>
                                <div className={styles.hmNayWrapper}>
                                  <div className={styles.label22}>Tùy chọn</div>
                                  <div className={styles.pointer} />
                                </div>
                                <img
                                  className={styles.ucommentDotsIcon}
                                  alt=""
                                  src="/down.svg"
                                />
                                <img
                                  className={styles.outlineClose}
                                  alt=""
                                  src="/down.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameParent29}>
                        <div className={styles.downGroup}>
                          <img
                            className={styles.downIcon}
                            alt=""
                            src="/down1.svg"
                          />
                          <div className={styles.thiGianWrapper}>
                            <div className={styles.div}>Hiển thị theo</div>
                          </div>
                        </div>
                        <div className={styles.frameWrapper1}>
                          <div className={styles.menuFilterGroup}>
                            <div className={styles.menuFilter3}>
                              <div className={styles.usearchParent}>
                                <img
                                  className={styles.ucommentDotsIcon}
                                  alt=""
                                  src="/userveralt.svg"
                                />
                                <div className={styles.search}>Công việc</div>
                              </div>
                              <div className={styles.wrapper17}>
                                <div className={styles.div}>06</div>
                              </div>
                            </div>
                            <div className={styles.menuFilter4}>
                              <div className={styles.textParent}>
                                <img
                                  className={styles.ucommentDotsIcon}
                                  alt=""
                                  src="/ufilemedicalalt1.svg"
                                />
                                <div className={styles.bLc}>Dự án</div>
                              </div>
                              <div className={styles.wrapper17}>
                                <div className={styles.div}>06</div>
                              </div>
                              <img
                                className={styles.ucommentDotsIcon}
                                alt=""
                                src="/ucheck.svg"
                              />
                            </div>
                            <div className={styles.menuFilter3}>
                              <div className={styles.usearchParent}>
                                <img
                                  className={styles.ucommentDotsIcon}
                                  alt=""
                                  src="/umeetingboard.svg"
                                />
                                <div className={styles.search}>Milestones</div>
                              </div>
                              <div className={styles.wrapper17}>
                                <div className={styles.div}>06</div>
                              </div>
                            </div>
                            <div className={styles.menuFilter3}>
                              <div className={styles.usearchParent}>
                                <img
                                  className={styles.ucommentDotsIcon}
                                  alt=""
                                  src="/uparcel.svg"
                                />
                                <div className={styles.search}>Resource</div>
                              </div>
                              <div className={styles.wrapper17}>
                                <div className={styles.div}>06</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameParent28}>
                        <div className={styles.downGroup}>
                          <img
                            className={styles.downIcon}
                            alt=""
                            src="/down.svg"
                          />
                          <div className={styles.thiGianWrapper}>
                            <div className={styles.div}>Phòng ban</div>
                          </div>
                        </div>
                        <div className={styles.frameWrapper1}>
                          <div className={styles.menuFilterGroup}>
                            <div className={styles.menuFilter3}>
                              <div className={styles.usearchParent}>
                                <img
                                  className={styles.ucommentDotsIcon}
                                  alt=""
                                  src="/down.svg"
                                />
                                <div className={styles.search}>
                                  Phòng phần mềm
                                </div>
                              </div>
                              <div className={styles.wrapper17}>
                                <div className={styles.div}>06</div>
                              </div>
                            </div>
                            <div className={styles.menuFilter3}>
                              <div className={styles.usearchParent}>
                                <img
                                  className={styles.ucommentDotsIcon}
                                  alt=""
                                  src="/down.svg"
                                />
                                <div className={styles.search}>
                                  Phòng kế toán
                                </div>
                              </div>
                              <div className={styles.wrapper17}>
                                <div className={styles.div}>06</div>
                              </div>
                            </div>
                            <div className={styles.menuFilter3}>
                              <div className={styles.usearchParent}>
                                <img
                                  className={styles.ucommentDotsIcon}
                                  alt=""
                                  src="/down.svg"
                                />
                                <div className={styles.search}>Marketing</div>
                              </div>
                              <div className={styles.wrapper17}>
                                <div className={styles.div}>06</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.mennu1}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/ulistuialt.svg"
                    />
                    <div className={styles.hmNayWrapper}>
                      <div className={styles.hmNay2}>Việc của tôi</div>
                    </div>
                    <img
                      className={styles.uangleRightIcon1}
                      alt=""
                      src="/uangleright2.svg"
                    />
                  </div>
                  <div className={styles.mennu1}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uchartline.svg"
                    />
                    <div className={styles.hmNayWrapper}>
                      <div className={styles.hmNay2}>Báo cáo</div>
                    </div>
                    <img
                      className={styles.uangleRightIcon1}
                      alt=""
                      src="/uangleright2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isSettingCollumnOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSettingCollumn}
        >
          <SettingCollumn onClose={closeSettingCollumn} />
        </PortalPopup>
      )}
    </>
  );
};

export default DashboardManagerProjects;
