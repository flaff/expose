import { Button, Modal } from "react-bootstrap"
import { useAdultContent } from "../context/AdultContentContext"
import { useSimpleTranslation } from "../context/TranslationProvider"
import React, { useState } from "react"

export function ShowAdultContentButton(props) {
  const { t } = useSimpleTranslation()
  const { showAdultContent } = useAdultContent()
  const [modalVisible, setModalVisible] = useState(false)


  const handleShowAdultContent = () => setModalVisible(true)
  const handleBack = () => setModalVisible(false)
  const handleConfirm = () => {
    setModalVisible(false)
    showAdultContent()
  }

  return (
    <>
      {modalVisible && (
        <Modal
          show={modalVisible}
          style={{ color: "black" }}
          size="lg"
          centered
          onHide={handleBack}
        >
          <Modal.Body>
            <h2>{t("adultContent")}</h2>
            {t("adultContentDisclaimer")}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="tertiary" onClick={handleBack}>
              {t("back")}
            </Button>
            <Button onClick={handleConfirm}>{t("showAdultContent")}</Button>
          </Modal.Footer>
        </Modal>
      )}
      <Button
        variant="outline-dark"
        {...props}
        onClick={handleShowAdultContent}
      >
        {t("showAdultContent")}
      </Button>
    </>
  )
}
