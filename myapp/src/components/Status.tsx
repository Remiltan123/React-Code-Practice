type StatusProps = {
  status: 'loading' | 'success' | 'error';
};

enum StatusState {
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}
function findStatus(status: StatusState): string {
    let msg;
    switch (status) {
        case (StatusState. Loading ):
            msg = "Loading..."
            break;
        case (StatusState.Success):
            msg = "Sccusees..."
            break;
        case (StatusState.Error):
            msg = "Error..."
            break;
        default:
            msg= "Unnow status"
    }
    return msg;
}

export const StatusofUser = ( { status }: StatusProps) => {
  return <p>{findStatus(status as StatusState)}</p>;
};