import React, { useState } from "react";
import FileManager, {
  Permissions,
  ItemView,
  Details,
  Column,
} from "devextreme-react/file-manager";

const allowedFileExtensions: any = [];

export const FileManagerView = ({
  fileSystem,
  onFileSelectedChange,
}: Props) => {
  const [currentPath, setCurrentPath] = useState("Documents/Reports");

  const onCurrentDirectoryChanged = (e: any) => {
    setCurrentPath(e.component.option("currentPath"));
  };

  return fileSystem ? (
    <FileManager
      currentPath={currentPath}
      fileSystemProvider={fileSystem}
      allowedFileExtensions={allowedFileExtensions}
      height={550}
      onCurrentDirectoryChanged={onCurrentDirectoryChanged}
      onSelectionChanged={onFileSelectedChange}
    >
      <Permissions
        create={true}
        copy={true}
        move={true}
        delete={true}
        rename={true}
      ></Permissions>
      <ItemView>
        <Details>
          <Column dataField="thumbnail"></Column>
          <Column dataField="name"></Column>
          <Column dataField="dateModified" caption="Modified"></Column>
          <Column
            dataField="created"
            caption="Created"
            dataType="date"
          ></Column>
          <Column dataField="modifiedBy" caption="Modified By"></Column>
        </Details>
      </ItemView>
    </FileManager>
  ) : (
    <></>
  );
};

interface Props {
  fileSystem: any;
  onFileSelectedChange: (e: any) => void;
}
