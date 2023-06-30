import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSceleton = () => {
  return (
    <Card width="250px " overflow="hidden" borderRadius="10px">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSceleton;
